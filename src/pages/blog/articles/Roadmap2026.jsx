function Roadmap2026() {
    return (
        <div className="min-h-screen latte:bg-latte-base mocha:bg-mocha-base">
            {/* Hero Image Section */}
            <div className="relative w-full h-96 overflow-hidden latte:bg-latte-surface0 mocha:bg-mocha-surface0">
                <img
                    src="/src/assets/blog/2026-roadmap.png"
                    alt="Luma Engine 2026 Roadmap"
                    className="w-full h-full object-cover"
                />
                {/* Overlay with title and tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="max-w-4xl mx-auto w-full p-8">
                        <h1 className="text-5xl font-bold text-white mb-2">
                            Luma Engine 2026 Roadmap
                        </h1>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Article Metadata */}
                <div className="flex items-center justify-between mb-12 pb-8 border-b latte:border-latte-overlay0 mocha:border-mocha-overlay0">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-full latte:bg-latte-lavender mocha:bg-mocha-lavender flex items-center justify-center text-white font-semibold">
                                A
                            </div>
                            <div>
                                <p className="font-semibold latte:text-latte-text mocha:text-mocha-text">Astrix</p>
                            </div>
                        </div>
                    </div>
                    <time className="latte:text-latte-subtext0 mocha:text-mocha-subtext0">
                        2 October 2025
                    </time>
                </div>

                {/* Tag with Outline */}
                <div className="mb-8">
                    <a
                        href="/blog?category=Meta"
                        className="inline-block px-4 py-2 rounded-lg text-sm font-medium border-2 latte:border-latte-overlay0 mocha:border-mocha-overlay0 latte:text-latte-text mocha:text-mocha-text latte:hover:border-latte-lavender mocha:hover:border-mocha-lavender latte:hover:text-latte-lavender mocha:hover:text-mocha-lavender transition-colors"
                    >
                        Meta
                    </a>
                </div>

                {/* Article Body */}
                <article className="prose latte:prose-slate mocha:prose-invert max-w-none">
                    <p className="text-xl latte:text-latte-text mocha:text-mocha-text leading-relaxed mb-8">
                        As we enter 2026, I'm excited to share the plans and direction for Luma Engine over the coming year. This roadmap will be updated as priorities become clearer throughout the year.
                    </p>

                    <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mt-12 mb-6">
                        2026 Plans (To Be Announced)
                    </h2>

                    <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 leading-relaxed mb-6">
                        Specific goals and milestones for 2026 are still being planned. This roadmap will be updated once priorities are finalized. Check back soon for detailed quarterly plans and feature announcements.
                    </p>

                    <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mt-12 mb-6">
                        Beyond 2026
                    </h2>

                    <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 leading-relaxed mb-6">
                        Looking further ahead, I'm committed to using Luma to create and ship commercial games. This real-world usage will drive the engine's development and ensure it meets the needs of actual game production.
                    </p>

                    <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 leading-relaxed mb-6">
                        I also see Luma as a platform for education and creative expression - whether that's interactive art, data visualization, or experimental projects. The path tracer currently in development is part of this vision, enabling both real-time and offline rendering workflows.
                    </p>

                    <div className="my-12 p-8 rounded-lg latte:bg-latte-mantle mocha:bg-mocha-mantle border-l-4 latte:border-latte-lavender mocha:border-mocha-lavender">
                        <p className="latte:text-latte-text mocha:text-mocha-text text-lg leading-relaxed">
                            This roadmap is ambitious but achievable. As always, plans may shift based on community feedback and practical needs. Your input shapes where Luma goes next.
                        </p>
                    </div>

                    <div className="mt-16 pt-8 border-t latte:border-latte-overlay0 mocha:border-mocha-overlay0">
                        <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                            Questions or suggestions? Join the discussion on <a href="https://github.com/StudioAeon/Luma" className="latte:text-latte-lavender mocha:text-mocha-lavender latte:hover:text-latte-mauve mocha:hover:text-mocha-mauve font-medium underline">GitHub</a> or reach out directly.
                        </p>
                    </div>
                </article>

                {/* Back to Blog Link */}
                <div className="mt-12 pt-8 border-t latte:border-latte-overlay0 mocha:border-mocha-overlay0">
                    <a
                        href="/blog"
                        className="inline-flex items-center latte:text-latte-lavender mocha:text-mocha-lavender latte:hover:text-latte-mauve mocha:hover:text-mocha-mauve transition-colors font-medium"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Back to Blog
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Roadmap2026;