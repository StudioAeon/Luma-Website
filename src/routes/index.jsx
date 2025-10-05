import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { homeRoutes } from "./home.routes";
import { blogRoutes } from "./blog.routes";
import { downloadRoutes } from "./download.routes";
import { legalRoutes } from "./legal.routes";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            ...homeRoutes,
            ...blogRoutes,
            ...downloadRoutes,
            ...legalRoutes
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);