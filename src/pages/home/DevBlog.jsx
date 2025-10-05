import { getFeaturedArticles } from "../blog/data";
import ArticleCard from "../blog/components/ArticleCard";

function DevBlog() {
    const featuredArticles = getFeaturedArticles();

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

                <div className={`grid gap-8 ${
                    featuredArticles.length === 1
                        ? 'md:grid-cols-1 max-w-md mx-auto'
                        : featuredArticles.length === 2
                            ? 'md:grid-cols-2 max-w-4xl mx-auto'
                            : 'md:grid-cols-2 lg:grid-cols-3'
                }`}>
                    {featuredArticles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>

                {/* View all articles button */}
                <div className="mt-12 text-center">
                    <a
                        href="/blog"
                        className="inline-flex items-center px-6 py-3 border-2 latte:border-latte-lavender mocha:border-mocha-lavender rounded-lg text-base font-medium latte:text-latte-lavender mocha:text-mocha-lavender latte:hover:bg-latte-lavender mocha:hover:bg-mocha-lavender latte:hover:text-latte-base mocha:hover:text-mocha-base transition-colors"
                    >
                        View all articles
                        <svg
                            className="ml-2 -mr-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DevBlog;
