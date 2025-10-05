import { lazy } from "react";

const Home = lazy(() => import("../pages/home/Index"));
const About = lazy(() => import("../pages/about/Index"));

export const homeRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: "about",
        element: <About />
    }
];