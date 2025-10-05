import React from 'react';

const ArticleCard = ({ article }) => {
    return (
        <a
            href={`/blog/articles/${article.slug}`}
            className="group bg-latte-mantle mocha:bg-mocha-mantle rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        >
            {/* Article Image */}
            <div className="relative h-48 overflow-hidden latte:bg-latte-surface0 mocha:bg-mocha-surface0">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                />
                {/* Tag Overlay */}
                <div className="absolute top-4 right-4">
          <span className="inline-block px-3 py-1 latte:bg-latte-lavender mocha:bg-mocha-lavender latte:text-latte-base mocha:text-mocha-base text-sm font-semibold rounded-full shadow-lg">
            {article.tag}
          </span>
                </div>
            </div>

            {/* Article Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold latte:text-latte-text mocha:text-mocha-text group-hover:latte:text-latte-lavender group-hover:mocha:text-mocha-lavender transition-colors mb-3">
                    {article.title}
                </h3>
                <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 text-sm mb-4 line-clamp-2">
                    {article.description}
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-4 border-t latte:border-latte-overlay0 mocha:border-mocha-overlay0">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full latte:bg-latte-lavender mocha:bg-mocha-lavender flex items-center justify-center latte:text-latte-base mocha:text-mocha-base font-semibold text-sm">
                            {article.author[0]}
                        </div>
                        <span className="text-sm latte:text-latte-text mocha:text-mocha-text">{article.author}</span>
                    </div>
                    <div className="text-xs latte:text-latte-subtext0 mocha:text-mocha-subtext0">
                        {article.date}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ArticleCard;