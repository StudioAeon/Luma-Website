import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { CategoryFilter, Pagination } from "../../components";
import BlogHero from './components/BlogHero';
import ArticleCard from './components/ArticleCard';
import { articles, categories, getArticlesByCategory, searchArticles } from './data';

function Blog() {
    const { page } = useParams();
    const [searchParams] = useSearchParams();
    const currentPage = parseInt(page) || 1;
    const articlesPerPage = 6;

    const categoryFromUrl = searchParams.get('category') || 'All';
    const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setSelectedCategory(categoryFromUrl);
    }, [categoryFromUrl]);

    // Filter articles using helper functions
    const filteredArticles = useMemo(() => {
        let result = getArticlesByCategory(selectedCategory);

        if (searchQuery) {
            result = searchArticles(searchQuery).filter(article =>
                selectedCategory === "All" || article.tag === selectedCategory
            );
        }

        return result;
    }, [selectedCategory, searchQuery]);

    // Pagination
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    const startIndex = (currentPage - 1) * articlesPerPage;
    const paginatedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

    const getGridClasses = (count) => {
        if (count === 1) return 'grid gap-8 md:grid-cols-1 max-w-md mx-auto';
        if (count === 2) return 'grid gap-8 md:grid-cols-2 max-w-4xl mx-auto';
        return 'grid gap-8 md:grid-cols-2 lg:grid-cols-3';
    };

    return (
        <div className="min-h-screen latte:bg-latte-base mocha:bg-mocha-base">
            <BlogHero searchQuery={searchQuery} onSearchChange={setSearchQuery} />

            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />

            {/* Articles Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {paginatedArticles.length > 0 ? (
                    <>
                        <div className={getGridClasses(paginatedArticles.length)}>
                            {paginatedArticles.map((article) => (
                                <ArticleCard key={article.id} article={article} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <Pagination currentPage={currentPage} totalPages={totalPages} baseUrl="/blog" />
                    </>
                ) : (
                    <div className="text-center py-16">
                        <svg className="w-16 h-16 latte:text-latte-overlay0 mocha:text-mocha-overlay0 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-xl latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
                            No articles found matching your search
                        </p>
                        <button
                            onClick={() => {
                                setSelectedCategory("All");
                                setSearchQuery("");
                            }}
                            className="px-6 py-2 latte:bg-latte-lavender mocha:bg-mocha-lavender latte:text-latte-base mocha:text-mocha-base rounded-lg latte:hover:bg-latte-mauve mocha:hover:bg-mocha-mauve transition-colors"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Blog;