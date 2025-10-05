import ArticleLayout from '../components/ArticleLayout';
import { getArticleBySlug } from '../data';
import { blogImages } from "../../../constants/images";

function Roadmap2026() {
    const article = getArticleBySlug('2025-roadmap'); //TODO: Update to 2026

    return (
        <ArticleLayout
            title={article.title}
            author={article.author}
            date={article.date}
            tag={article.tag}
            heroImage={blogImages.roadmap2026}
            heroAlt="Luma Engine 2026 Roadmap"
        >
            <p className="text-xl latte:text-latte-text mocha:text-mocha-text leading-relaxed mb-8">
                As we enter 2026, I'm excited to share the plans and direction for Luma Engine over the coming year. This roadmap will be updated as priorities become clearer throughout the year.
            </p>

            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mt-12 mb-6">
                2026 Plans (To Be Announced)
            </h2>

            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 leading-relaxed mb-6">
                Specific goals and milestones for 2026 are still being planned. This roadmap will be updated once priorities are finalized. Check back soon for detailed quarterly plans and feature announcements.
            </p>

            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mt-12 mb-6">
                Beyond 2026
            </h2>

            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 leading-relaxed mb-6">
                Looking further ahead, I'm committed to using Luma to create and ship commercial games. This real-world usage will drive the engine's development and ensure it meets the needs of actual game production.
            </p>

            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 leading-relaxed mb-6">
                I also see Luma as a platform for education and creative expression - whether that's interactive art, data visualization, or experimental projects. The path tracer currently in development is part of this vision, enabling both real-time and offline rendering workflows.
            </p>

            <div className="my-12 p-8 rounded-lg latte:bg-latte-mantle mocha:bg-mocha-mantle border-l-4 latte:border-latte-lavender mocha:border-mocha-lavender">
                <p className="latte:text-latte-text mocha:text-mocha-text text-lg leading-relaxed">
                    This roadmap is ambitious but achievable. As always, plans may shift based on community feedback and practical needs. Your input shapes where Luma goes next.
                </p>
            </div>

            <div className="mt-16 pt-8 border-t latte:border-latte-overlay0 mocha:border-mocha-overlay0">
                <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                    Questions or suggestions? Join the discussion on <a href="https://github.com/StudioAeon/Luma" className="latte:text-latte-lavender mocha:text-mocha-lavender latte:hover:text-latte-mauve mocha:hover:text-mocha-mauve font-medium underline">GitHub</a> or reach out directly.
                </p>
            </div>
        </ArticleLayout>
    );
}

export default Roadmap2026;