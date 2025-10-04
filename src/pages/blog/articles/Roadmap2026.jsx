function Roadmap2026() {
    return (
        <div className="max-w-4xl mx-auto p-8 latte:bg-latte-base mocha:bg-mocha-base">
            <div className="mb-8">
                <a href="/blog" className="inline-flex items-center latte:text-latte-lavender mocha:text-mocha-lavender latte:hover:text-latte-text mocha:hover:text-mocha-text transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to articles
                </a>
            </div>

            <article>
                <header className="mb-8">
                    <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium latte:bg-latte-lavender/20 mocha:bg-mocha-lavender/20 latte:text-latte-lavender mocha:text-mocha-lavender">
              Meta
            </span>
                    </div>

                    <h1 className="text-4xl font-bold latte:text-latte-text mocha:text-mocha-text mb-4">
                        Luma Engine 2026 Roadmap
                    </h1>

                    <div className="flex items-center latte:text-latte-subtext0 mocha:text-mocha-subtext0">
                        <div className="flex items-center mr-6">
                            <div className="h-10 w-10 rounded-full latte:bg-latte-surface0 mocha:bg-mocha-surface0 flex items-center justify-center latte:text-latte-text mocha:text-mocha-text font-semibold mr-3">
                                A
                            </div>
                            <span className="font-medium">Astrix</span>
                        </div>
                        <time>January 01, 2026</time>
                        <span className="mx-2">·</span>
                        <span>3 min read</span>
                    </div>
                </header>

                <div className="prose latte:prose-slate mocha:prose-invert max-w-none">
                    <div className="p-6 rounded-lg latte:bg-latte-mantle mocha:bg-mocha-mantle mb-8">
                        <p className="text-lg latte:text-latte-text mocha:text-mocha-text">
                            As we enter 2026, I'm excited to share the plans and direction for Luma Engine over the coming year. This roadmap will be updated as priorities become clearer throughout the year.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold latte:text-latte-text mocha:text-mocha-text mt-8 mb-4">
                        2026 Plans (To Be Announced)
                    </h2>

                    <div className="p-6 rounded-lg latte:bg-latte-crust mocha:bg-mocha-crust mb-6">
                        <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                            Specific goals and milestones for 2026 are still being planned. This roadmap will be updated once priorities are finalized. Check back soon for detailed quarterly plans and feature announcements.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold latte:text-latte-text mocha:text-mocha-text mt-8 mb-4">
                        Beyond 2026
                    </h2>

                    <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
                        Looking further ahead, I'm committed to using Luma to create and ship commercial games. This real-world usage will drive the engine's development and ensure it meets the needs of actual game production.
                    </p>

                    <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
                        I also see Luma as a platform for education and creative expression - whether that's interactive art, data visualization, or experimental projects. The path tracer currently in development is part of this vision, enabling both real-time and offline rendering workflows.
                    </p>

                    <div className="p-6 rounded-lg latte:bg-latte-lavender/10 mocha:bg-mocha-lavender/10 border-l-4 latte:border-latte-lavender mocha:border-mocha-lavender mt-8">
                        <p className="latte:text-latte-text mocha:text-mocha-text font-medium">
                            This roadmap is ambitious but achievable. As always, plans may shift based on community feedback and practical needs. Your input shapes where Luma goes next.
                        </p>
                    </div>

                    <div className="mt-8 pt-8 border-t latte:border-latte-overlay0 mocha:border-mocha-overlay0">
                        <p className="latte:text-latte-subtext0 mocha:text-mocha-subtext0">
                            Questions or suggestions? Join the discussion on <a href="https://github.com/StudioAeon/Luma" className="latte:text-latte-lavender mocha:text-mocha-lavender latte:hover:text-latte-text mocha:hover:text-mocha-text font-medium">GitHub</a> or reach out directly.
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Roadmap2026;