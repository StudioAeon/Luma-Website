import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pagination = ({ currentPage, totalPages, baseUrl = '/blog' }) => {
    const navigate = useNavigate();

    const goToPage = (page) => {
        if (page === 1) {
            navigate(baseUrl);
        } else {
            navigate(`${baseUrl}/${page}`);
        }
    };

    const renderPageNumbers = () => {
        const pages = [];
        const maxVisible = 5;

        let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
        let endPage = Math.min(totalPages, startPage + maxVisible - 1);

        if (endPage - startPage + 1 < maxVisible) {
            startPage = Math.max(1, endPage - maxVisible + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        currentPage === i
                            ? 'latte:bg-latte-lavender mocha:bg-mocha-lavender latte:text-latte-base mocha:text-mocha-base shadow-lg'
                            : 'latte:bg-latte-surface0 mocha:bg-mocha-surface0 latte:text-latte-text mocha:text-mocha-text latte:hover:bg-latte-surface1 mocha:hover:bg-mocha-surface1'
                    }`}
                >
                    {i}
                </button>
            );
        }

        return pages;
    };

    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-2 py-8">
            {/* Previous Button */}
            {currentPage > 1 && (
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    className="px-4 py-2 rounded-lg font-medium latte:bg-latte-surface0 mocha:bg-mocha-surface0 latte:text-latte-text mocha:text-mocha-text latte:hover:bg-latte-surface1 mocha:hover:bg-mocha-surface1 transition-all"
                >
                    ← Prev
                </button>
            )}

            {/* Page Numbers */}
            {renderPageNumbers()}

            {/* Next Button */}
            {currentPage < totalPages && (
                <button
                    onClick={() => goToPage(currentPage + 1)}
                    className="px-4 py-2 rounded-lg font-medium latte:bg-latte-surface0 mocha:bg-mocha-surface0 latte:text-latte-text mocha:text-mocha-text latte:hover:bg-latte-surface1 mocha:hover:bg-mocha-surface1 transition-all"
                >
                    Next →
                </button>
            )}
        </div>
    );
};

export default Pagination;