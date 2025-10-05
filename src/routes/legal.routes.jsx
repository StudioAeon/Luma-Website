import { lazy } from "react";

const CodeOfConduct = lazy(() => import("../pages/legal/CodeOfConduct"));
const PrivacyPolicy = lazy(() => import("../pages/legal/Privacy"));
const License = lazy(() => import("../pages/legal/License"));

export const legalRoutes = [
    {
        path: "code-of-conduct",
        element: <CodeOfConduct />
    },
    {
        path: "privacy-policy",
        element: <PrivacyPolicy />
    },
    {
        path: "license",
        element: <License />
    }
];