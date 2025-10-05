import { lazy } from "react";

const DownloadIndex = lazy(() => import("../pages/downloads/Index"));
const Windows = lazy(() => import("../pages/downloads/Windows"));
const MacOS = lazy(() => import("../pages/downloads/MacOS"));
const Linux = lazy(() => import("../pages/downloads/Linux"));

export const downloadRoutes = [
    {
        path: "download",
        children: [
            {
                index: true,
                element: <DownloadIndex />
            },
            {
                path: "windows",
                element: <Windows />
            },
            {
                path: "macos",
                element: <MacOS />
            },
            {
                path: "linux",
                element: <Linux />
            }
        ]
    }
];