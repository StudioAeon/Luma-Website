import React from 'react';

const ArticleCard = ({ article }) => {
    return (
        <a
            href={`/blog/articles/${article.slug}`}
            className="group flex flex-col rounded-2xl overflow-hidden latte:bg-latte-mantle mocha:bg-mocha-mantle shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
            {/* Article Image */}
            <div className="relative h-48 overflow-hidden latte:bg-latte-surface0 mocha:bg-mocha-surface0">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                />
            </div>

            {/* Article Content */}
            <div className="flex-1 p-6 flex flex-col">
                <div className="flex-1">
                    <h3 className="text-xl font-bold latte:text-latte-text mocha:text-mocha-text group-hover:latte:text-latte-lavender group-hover:mocha:text-mocha-lavender transition-colors">
                        {article.title}
                    </h3>
                    <p className="mt-3 text-base latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                        {article.description}
                    </p>
                </div>

                {/* Tag */}
                <div className="mt-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium latte:bg-latte-lavender/20 mocha:bg-mocha-lavender/20 latte:text-latte-lavender mocha:text-mocha-lavender">
            {article.tag}
          </span>
                </div>

                {/* Author Info */}
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
    );
};

export default ArticleCard;