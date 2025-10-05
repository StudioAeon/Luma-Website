import React from 'react';

const CategoryFilter = ({categories, selectedCategory, onCategoryChange, className = ""}) => {
    return (
        <div className={`latte:bg-latte-surface0 mocha:bg-mocha-surface0 border-b latte:border-latte-overlay0 mocha:border-mocha-overlay0 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex items-center gap-4 overflow-x-auto">
                    <span className="latte:text-latte-text mocha:text-mocha-text font-semibold whitespace-nowrap">Categories</span>
                    <div className="flex gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => onCategoryChange(category)}
                                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                                    selectedCategory === category
                                        ? 'latte:bg-latte-lavender mocha:bg-mocha-lavender latte:text-latte-base mocha:text-mocha-base shadow-lg'
                                        : 'latte:bg-latte-surface1 mocha:bg-mocha-surface1 latte:text-latte-text mocha:text-mocha-text latte:hover:bg-latte-surface2 mocha:hover:bg-mocha-surface2'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Filtered By Indicator */}
                {selectedCategory !== "All" && (
                    <div className="mt-4">
                        <p className="text-sm latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                            Filtered by:{" "}
                            <span className="font-semibold latte:text-latte-lavender mocha:text-mocha-lavender">
                {selectedCategory}
              </span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryFilter;