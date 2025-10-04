import roadmap2026 from "../../assets/blog/2026-roadmap.png";
import sdl3migration from "../../assets/blog/sdl3-migration.png"
import pbrrenderer from "../../assets/blog/pbr-renderer.png"

function DevBlog() {
    const articles = [
        {
            id: 1,
            title: "Migrating from GLFW to SDL3",
            description: "A deep dive into our transition to SDL3 and the improvements it brought to the engine.",
            image: sdl3migration,
            tag: "Engine",
            author: "Astrix",
            date: "01/15/2025",
            readTime: "5 min read",
            slug: "sdl3-migration"
        },
        {
            id: 2,
            title: "Building a PBR Renderer",
            description: "How I implemented physically-based rendering with Cook-Torrance BRDF and IBL.",
            image: pbrrenderer,
            tag: "Rendering",
            author: "Astrix",
            date: "01/08/2025",
            readTime: "8 min read",
            slug: "pbr-renderer"
        },
        {
            id: 3,
            title: "2026 Roadmap",
            description: "Our plans for Luma Engine throughout 2025 and beyond.",
            image: roadmap2026,
            tag: "Meta",
            author: "Astrix",
            date: "01/01/2025",
            readTime: "3 min read",
            slug: "2025-roadmap"
        }
    ];

    return (
        <div className="latte:bg-latte-mantle mocha:bg-mocha-mantle py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold latte:text-latte-text mocha:text-mocha-text sm:text-4xl lg:text-5xl">
                        Latest Articles
                    </h2>
                    <p className="mt-4 text-xl latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                        Development articles and updates from Astrix.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <a
                            key={article.id}
                            href={`/blog/articles/${article.slug}`}
                            className="group flex flex-col rounded-2xl overflow-hidden latte:bg-latte-base mocha:bg-mocha-base shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
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

                <div className="mt-12 text-center">
                    <a
                        href="/blog"
                        className="inline-flex items-center px-6 py-3 border-2 latte:border-latte-lavender mocha:border-mocha-lavender rounded-lg text-base font-medium latte:text-latte-lavender mocha:text-mocha-lavender latte:hover:bg-latte-lavender mocha:hover:bg-mocha-lavender latte:hover:text-latte-base mocha:hover:text-mocha-base transition-colors"
                    >
                        View all articles
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DevBlog