import React from 'react';
import { CategoryFilter } from "../../components";
import BlogHero from './components/BlogHero';
import ArticleCard from './components/ArticleCard';
import roadmap2026 from "../../assets/blog/2026-roadmap.png";
import sdl3migration from "../../assets/blog/sdl3-migration.png";
import pbrrenderer from "../../assets/blog/pbr-renderer.png";

function BlogMain() {
    const articles = [
        {
            id: 1,
            title: "Luma Engine 2026 Roadmap",
            description: "Our plans for Luma Engine throughout 2025 and beyond, including quarterly milestones and long-term vision.",
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
            image: sdl3migration,
            tag: "Engine",
            author: "Astrix",
            date: "00/00/0000",
            readTime: "5 min read",
            slug: "sdl3-migration"
        },
        {
            id: 3,
            title: "Building a PBR Renderer",
            description: "How I implemented physically-based rendering with Cook-Torrance BRDF and IBL.",
            image: pbrrenderer,
            tag: "Rendering",
            author: "Astrix",
            date: "00/00/0000",
            readTime: "8 min read",
            slug: "pbr-renderer"
        }
    ];

    const categories = ["All", "Meta", "Engine", "Rendering", "Tools"];
    const [selectedCategory, setSelectedCategory] = React.useState("All");

    const filteredArticles = selectedCategory === "All"
        ? articles
        : articles.filter(article => article.tag === selectedCategory);

    return (
        <div className="latte:bg-latte-base mocha:bg-mocha-base min-h-screen">
            <BlogHero />

            {/* Category Filter */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                />
            </div>

            {/* Articles Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredArticles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>

                {/* No Results Message */}
                {filteredArticles.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-xl latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                            No articles found in this category yet.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BlogMain;