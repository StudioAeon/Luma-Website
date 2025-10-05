import { lazy } from "react";

const Blog = lazy(() => import("../pages/blog/Index"));
const Roadmap2026 = lazy(() => import("../pages/blog/articles/Roadmap2026"));

// const SDL3Migration = lazy(() => import("../pages/blog/articles/SDL3Migration"));
// const PBRRenderer = lazy(() => import("../pages/blog/articles/PBRRenderer"));

export const blogRoutes = [
    {
        path: "blog",
        children: [
            {
                index: true,
                element: <Blog />
            },
            {
                path: ":page",
                element: <Blog />
            },
            {
                path: "articles",
                children: [
                    {
                        path: "2025-roadmap",
                        element: <Roadmap2026 />
                    }
                    // Add more articles here as they're created:
                    // {
                    //   path: "sdl3-migration",
                    //   element: <SDL3Migration />
                    // },
                    // {
                    //   path: "pbr-renderer",
                    //   element: <PBRRenderer />
                    // }
                ]
            }
        ]
    }
];