import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Navbar, Footer } from "../../components";

const PageLoader = () => (
    <div className="flex items-center justify-center min-h-screen latte:bg-latte-base mocha:bg-mocha-base">
        <div className="text-center">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 latte:border-latte-lavender mocha:border-mocha-lavender border-t-transparent"></div>
            <p className="mt-4 latte:text-latte-text mocha:text-mocha-text">Loading...</p>
        </div>
    </div>
);

export default function RootLayout() {
    return (
        <>
            <Navbar />
            <main id="main-content" role="main">
                <Suspense fallback={<PageLoader />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}