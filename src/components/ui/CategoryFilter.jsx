import React from 'react';

const CategoryFilter = ({categories, selectedCategory, onCategoryChange, className = ""}) => {
    return (
        <div className={`flex flex-wrap gap-3 justify-center ${className}`}>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedCategory === category
                            ? 'latte:bg-latte-lavender mocha:bg-mocha-lavender latte:text-latte-base mocha:text-mocha-base shadow-md'
                            : 'latte:bg-latte-surface0 mocha:bg-mocha-surface0 latte:text-latte-text mocha:text-mocha-text latte:hover:bg-latte-surface1 mocha:hover:bg-mocha-surface1'
                    }`}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;