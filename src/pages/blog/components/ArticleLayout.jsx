import React from 'react';

const ArticleLayout = ({ title, author = "Astrix", date, tag, heroImage, heroAlt, children }) => {
    return (
        <div className="min-h-screen latte:bg-latte-base mocha:bg-mocha-base">
            {/* Hero Image Section */}
            <div className="relative w-full h-96 overflow-hidden latte:bg-latte-surface0 mocha:bg-mocha-surface0">
                <img
                    src={heroImage}
                    alt={heroAlt || title}
                    className="w-full h-full object-cover"
                />
                {/* Overlay with title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="max-w-4xl mx-auto w-full p-8">
                        <h1 className="text-5xl font-bold text-white mb-2">
                            {title}
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
                                {author[0]}
                            </div>
                            <div>
                                <p className="font-semibold latte:text-latte-text mocha:text-mocha-text">
                                    {author}
                                </p>
                            </div>
                        </div>
                    </div>
                    <time className="latte:text-latte-subtext0 mocha:text-mocha-subtext0">
                        {date}
                    </time>
                </div>

                {/* Tag with Outline */}
                <div className="mb-8">
                    <a
                        href={`/blog?category=${tag}`}
                        className="inline-block px-4 py-2 rounded-lg text-sm font-medium border-2 latte:border-latte-overlay0 mocha:border-mocha-overlay0 latte:text-latte-text mocha:text-mocha-text latte:hover:border-latte-lavender mocha:hover:border-mocha-lavender latte:hover:text-latte-lavender mocha:hover:text-mocha-lavender transition-colors"
                    >
                        {tag}
                    </a>
                </div>

                {/* Article Body */}
                <article className="prose latte:prose-slate mocha:prose-invert max-w-none">
                    {children}
                </article>

                {/* Back to Blog Link */}
                <div className="mt-12 pt-8 border-t latte:border-latte-overlay0 mocha:border-mocha-overlay0">
                    <a
                        href="/blog"
                        className="inline-flex items-center latte:text-latte-lavender mocha:text-mocha-lavender latte:hover:text-latte-mauve mocha:hover:text-mocha-mauve transition-colors font-medium"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Back to Blog
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ArticleLayout;
