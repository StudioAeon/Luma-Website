import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { CategoryFilter, Pagination } from "../../components";
import BlogHero from './components/BlogHero';
import ArticleCard from './components/ArticleCard';
import roadmap2026 from "../../assets/blog/2026-roadmap.png";
import placeholder from "../../assets/blog/Placeholder.png";

function Blog() {
    const { page } = useParams();
    const [searchParams] = useSearchParams();
    const currentPage = parseInt(page) || 1;
    const articlesPerPage = 6;

    const categoryFromUrl = searchParams.get('category') || 'All';

    const allArticles = [

        // Temp
        {
            id: 1,
            title: "Luma Engine 2026 Roadmap",
            description: "My plans for Luma Engine throughout 2025 and beyond, including quarterly milestones and long-term vision.",
            image: roadmap2026,
            tag: "Meta",
            author: "Astrix",
            date: "10/4/2025",
            readTime: "3 min read",
            slug: "2025-roadmap"
        },
        {
            id: 2,
            title: "Migrating from GLFW to SDL3",
            description: "A deep dive into our transition to SDL3 and the improvements it brought to the engine.",
            image: placeholder,
            tag: "Engine",
            author: "Astrix",
            date: "01/15/2025",
            readTime: "5 min read",
            slug: "sdl3-migration"
        },
        {
            id: 3,
            title: "Building a PBR Renderer",
            description: "How I implemented physically-based rendering with Cook-Torrance BRDF and IBL.",
            image: placeholder,
            tag: "Rendering",
            author: "Astrix",
            date: "01/08/2025",
            readTime: "8 min read",
            slug: "pbr-renderer"
        },
        {
            id: 4,
            title: "Multi-threaded Asset Pipeline",
            description: "Optimizing asset loading with a custom multi-threaded pipeline for faster game startup times.",
            image: placeholder,
            tag: "Engine",
            author: "Astrix",
            date: "12/20/2024",
            readTime: "6 min read",
            slug: "asset-pipeline"
        },
        {
            id: 5,
            title: "Entity Component System Design",
            description: "Building a flexible ECS architecture for game objects with data-oriented design principles.",
            image: placeholder,
            tag: "Tools",
            author: "Astrix",
            date: "12/05/2024",
            readTime: "10 min read",
            slug: "ecs-design"
        },
        {
            id: 6,
            title: "Shader System Overview",
            description: "A look at our shader compilation and management system with hot-reload support.",
            image: placeholder,
            tag: "Rendering",
            author: "Astrix",
            date: "11/28/2024",
            readTime: "7 min read",
            slug: "shader-system"
        },
        {
            id: 7,
            title: "Input System Refactor",
            description: "Redesigning the input system for better controller support and rebinding.",
            image: placeholder,
            tag: "Engine",
            author: "Astrix",
            date: "11/15/2024",
            readTime: "5 min read",
            slug: "input-system"
        },
        {
            id: 8,
            title: "Audio Engine Integration",
            description: "Integrating a modern audio engine with 3D spatial sound support.",
            image: placeholder,
            tag: "Engine",
            author: "Astrix",
            date: "11/01/2024",
            readTime: "7 min read",
            slug: "audio-engine"
        },
        {
            id: 9,
            title: "Scene Graph Optimization",
            description: "Optimizing the scene graph for better performance in large worlds.",
            image: placeholder,
            tag: "Rendering",
            author: "Astrix",
            date: "10/20/2024",
            readTime: "9 min read",
            slug: "scene-graph"
        }
    ];

    const categories = ["All", "Meta", "Engine", "Rendering", "Tools"];
    const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setSelectedCategory(categoryFromUrl);
    }, [categoryFromUrl]);

    // Filter articles
    const filteredArticles = allArticles.filter(article => {
        const matchesCategory = selectedCategory === "All" || article.tag === selectedCategory;
        const matchesSearch = searchQuery === "" ||
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Pagination
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    const startIndex = (currentPage - 1) * articlesPerPage;
    const paginatedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

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
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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