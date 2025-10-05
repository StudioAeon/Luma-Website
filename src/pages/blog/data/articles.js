import { blogImages } from "../../../constants/images";

export const articles = [
    {
        id: 1,
        title: "Luma Engine 2026 Roadmap",
        description: "My plans for Luma Engine throughout 2026 and beyond, including quarterly milestones and long-term vision.",
        image: blogImages.roadmap2026,
        heroImage: blogImages.roadmap2026,
        tag: "Meta",
        author: "Astrix",
        date: "10/4/2025",
        readTime: "3 min read",
        slug: "2025-roadmap", //TODO: Update to 2026
        featured: true
    },
];

export const getArticleBySlug = (slug) =>
    articles.find(article => article.slug === slug);

export const getArticlesByCategory = (category) =>
    category === "All"
        ? articles
        : articles.filter(article => article.tag === category);

export const getFeaturedArticles = () =>
    articles.filter(article => article.featured);

export const searchArticles = (query) =>
    articles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.description.toLowerCase().includes(query.toLowerCase())
    );