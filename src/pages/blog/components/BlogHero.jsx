import React from 'react';

const BlogHero = () => {
    return (
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
    );
};

export default BlogHero;