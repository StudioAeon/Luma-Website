import React from 'react';

const BlogHero = ({ searchQuery, onSearchChange }) => {
    return (
        <div className="latte:bg-gradient-to-r latte:from-latte-base latte:to-latte-mantle mocha:bg-gradient-to-r mocha:from-mocha-base mocha:to-mocha-mantle py-10 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold latte:text-latte-text mocha:text-mocha-text mb-5">
                        Blog
                    </h1>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search articles"
                                value={searchQuery}
                                onChange={(e) => onSearchChange(e.target.value)}
                                className="w-full px-5 py-3 pr-12 latte:bg-latte-surface0 mocha:bg-mocha-surface0 latte:text-latte-text mocha:text-mocha-text latte:placeholder-latte-subtext0 mocha:placeholder-mocha-subtext0 rounded-lg focus:outline-none focus:ring-2 latte:focus:ring-latte-lavender mocha:focus:ring-mocha-lavender"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 latte:bg-latte-lavender mocha:bg-mocha-lavender latte:hover:bg-latte-mauve mocha:hover:bg-mocha-mauve p-2 rounded-lg transition-colors">
                                <svg className="w-5 h-5 latte:text-latte-base mocha:text-mocha-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogHero;