import React from 'react';
import roadmap2026 from "../../assets/blog/2026-roadmap.png";
import sdl3migration from "../../assets/blog/sdl3-migration.png"
import pbrrenderer from "../../assets/blog/pbr-renderer.png"

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
            {/* Hero Section */}
            <div className="latte:bg-gradient-to-r from-latte-base to-latte-mantle mocha:bg-gradient-to-r from-mocha-base to-mocha-mantle py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold latte:text-latte-text mocha:text-mocha-text sm:text-5xl lg:text-6xl">
                        Luma Engine Blog
                    </h1>
                    <p className="mt-4 text-xl latte:text-latte-subtext1 mocha:text-mocha-subtext1 max-w-3xl mx-auto">
                        Development articles, updates, and insights from Astrix.
                    </p>
                </div>
            </div>

            {/* Category Filter */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-wrap gap-3 justify-center">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                selectedCategory === category
                                    ? 'latte:bg-latte-lavender mocha:bg-mocha-lavender latte:text-latte-base mocha:text-mocha-base shadow-md'
                                    : 'latte:bg-latte-surface0 mocha:bg-mocha-surface0 latte:text-latte-text mocha:text-mocha-text latte:hover:bg-latte-surface1 mocha:hover:bg-mocha-surface1'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Articles Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredArticles.map((article) => (
                        <a
                            key={article.id}
                            href={`/blog/articles/${article.slug}`}
                            className="group flex flex-col rounded-2xl overflow-hidden latte:bg-latte-mantle mocha:bg-mocha-mantle shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="relative h-48 overflow-hidden latte:bg-latte-surface0 mocha:bg-mocha-surface0">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    loading="lazy"
                                />
                            </div>

                            <div className="flex-1 p-6 flex flex-col">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold latte:text-latte-text mocha:text-mocha-text group-hover:latte:text-latte-lavender group-hover:mocha:text-mocha-lavender transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="mt-3 text-base latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                                        {article.description}
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium latte:bg-latte-lavender/20 mocha:bg-mocha-lavender/20 latte:text-latte-lavender mocha:text-mocha-lavender">
                                        {article.tag}
                                    </span>
                                </div>

                                <div className="mt-4 flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="h-10 w-10 rounded-full latte:bg-latte-surface0 mocha:bg-mocha-surface0 flex items-center justify-center latte:text-latte-text mocha:text-mocha-text font-semibold">
                                            {article.author[0]}
                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium latte:text-latte-text mocha:text-mocha-text">
                                            {article.author}
                                        </p>
                                        <p className="text-sm latte:text-latte-subtext0 mocha:text-mocha-subtext0">
                                            {article.date} · {article.readTime}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
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