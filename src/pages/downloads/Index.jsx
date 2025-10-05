import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DownloadIndex = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const detectPlatform = () => {
            const userAgent = navigator.userAgent.toLowerCase();

            if (userAgent.includes("win")) {
                return "/download/windows";
            } else if (userAgent.includes("mac")) {
                return "/download/macos";
            } else if (userAgent.includes("linux") || userAgent.includes("x11")) {
                return "/download/linux";
            } else {
                return "/download/windows";
            }
        };

        const platformPath = detectPlatform();
        navigate(platformPath, { replace: true });
    }, [navigate]);

    return (
        <div className="flex items-center justify-center min-h-screen latte:bg-latte-base mocha:bg-mocha-base">
            <div className="text-center">
                <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 latte:border-latte-lavender mocha:border-mocha-lavender border-t-transparent"></div>
                <p className="mt-4 latte:text-latte-text mocha:text-mocha-text">Detecting your platform...</p>
            </div>
        </div>
    );
};

export default DownloadIndex;