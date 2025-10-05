import React from "react";

const MacOS = () => {
    const downloadLinks = [
        {
            name: "macOS - ARM64 (Apple Silicon)",
            subtitle: "ARM64 (M1, M2, M3, M4)",
            version: "1.0.0",
            date: "15 September 2025"
        },
        {
            name: "macOS - x86_64 (Intel)",
            subtitle: "x86_64",
            version: "1.0.0",
            date: "15 September 2025"
        }
    ];

    const distributionPlatforms = [
        { name: "Steam", icon: "🎮", color: "bg-blue-600 hover:bg-blue-700" },
    ];

    return (
        <div className="min-h-screen latte:bg-latte-base mocha:bg-mocha-base">
            {/* Hero Section with Background */}
            <div className="relative overflow-hidden py-16 sm:py-20">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                />
                <div className="absolute inset-0 latte:bg-latte-base/80 mocha:bg-mocha-base/80" />

                {/* Content */}
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl sm:text-6xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
                        Download Luma Engine
                        <br />
                        for macOS
                    </h1>

                    {/* Primary Download Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                        <a
                            href="https://github.com/StudioAeon/Luma/releases/latest"
                            className="group w-full sm:w-auto px-8 py-4 latte:bg-latte-lavender mocha:bg-mocha-lavender latte:text-latte-base mocha:text-mocha-base rounded-lg font-semibold text-lg shadow-lg latte:hover:bg-latte-mauve mocha:hover:bg-mocha-mauve transition-all transform hover:scale-105 flex items-center justify-between"
                        >
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                </svg>
                                <span>Luma Engine</span>
                            </div>
                            <span className="ml-6 px-3 py-1 latte:bg-latte-base/20 mocha:bg-mocha-base/20 rounded text-sm">
                                1.0.0
                            </span>
                        </a>
                    </div>

                    <p className="mt-4 latte:text-latte-subtext0 mocha:text-mocha-subtext0 text-sm">
                        ARM64 (Apple Silicon) - 15 September 2025
                    </p>

                    <p className="mt-8 latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                        Looking for <a href="/download/windows" className="latte:text-latte-lavender mocha:text-mocha-lavender hover:underline">Windows</a> or <a href="/download/linux" className="latte:text-latte-lavender mocha:text-mocha-lavender hover:underline">Linux</a>?
                    </p>
                </div>
            </div>

            {/* Platform Tabs */}
            <div className="latte:bg-latte-surface0 mocha:bg-mocha-surface0 border-b latte:border-latte-overlay0 mocha:border-mocha-overlay0">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-2 overflow-x-auto py-4 justify-center">
                        <a href="/download/windows" className="px-6 py-2 latte:bg-latte-surface1 mocha:bg-mocha-surface1 latte:text-latte-text mocha:text-mocha-text rounded-lg font-medium whitespace-nowrap latte:hover:bg-latte-surface2 mocha:hover:bg-mocha-surface2">
                            Windows
                        </a>
                        <a href="/download/macos" className="px-6 py-2 latte:bg-latte-lavender mocha:bg-mocha-lavender latte:text-latte-base mocha:text-mocha-base rounded-lg font-medium whitespace-nowrap">
                            macOS
                        </a>
                        <a href="/download/linux" className="px-6 py-2 latte:bg-latte-surface1 mocha:bg-mocha-surface1 latte:text-latte-text mocha:text-mocha-text rounded-lg font-medium whitespace-nowrap latte:hover:bg-latte-surface2 mocha:hover:bg-mocha-surface2">
                            Linux
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Requirements */}
                    <div className="latte:bg-latte-mantle mocha:bg-mocha-mantle rounded-xl p-8 shadow-lg">
                        <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
                            Requirements
                        </h2>
                        <ul className="space-y-4 latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                            <li className="flex items-start">
                                <span className="font-semibold latte:text-latte-text mocha:text-mocha-text mr-2">Recommended:</span>
                                <span>Metal 3 compatible hardware (M1 or newer)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-semibold latte:text-latte-text mocha:text-mocha-text mr-2">Minimal:</span>
                                <span>macOS 12.0 (Monterey) or later</span>
                            </li>
                        </ul>
                    </div>

                    {/* Instructions */}
                    <div className="latte:bg-latte-mantle mocha:bg-mocha-mantle rounded-xl p-8 shadow-lg">
                        <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
                            Instructions
                        </h2>
                        <ul className="space-y-4 latte:text-latte-subtext1 mocha:text-mocha-subtext1 list-disc list-inside">
                            <li>Extract and run. Luma is self-contained and does not require installation.</li>
                            <li>
                                If you run into an issue, check the{" "}
                                <a href="https://lumadocs.com/troubleshooting" className="latte:text-latte-lavender mocha:text-mocha-lavender hover:underline">
                                    Troubleshooting
                                </a>{" "}
                                page for common issues and their solutions.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* All Downloads */}
                <div className="mt-12 latte:bg-latte-mantle mocha:bg-mocha-mantle rounded-xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
                        All downloads
                    </h2>
                    <div className="space-y-3">
                        {downloadLinks.map((download, index) => (
                            <a
                                key={index}
                                href="https://github.com/StudioAeon/Luma/releases/latest"
                                className="block latte:bg-latte-surface0 mocha:bg-mocha-surface0 latte:hover:bg-latte-surface1 mocha:hover:bg-mocha-surface1 rounded-lg p-4 transition-colors"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold latte:text-latte-lavender mocha:text-mocha-lavender">
                                            {download.name}
                                        </h3>
                                        <p className="text-sm latte:text-latte-subtext0 mocha:text-mocha-subtext0">
                                            {download.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Distribution Platforms */}
                <div className="mt-12 latte:bg-latte-mantle mocha:bg-mocha-mantle rounded-xl p-8 shadow-lg">
                    <p className="text-xl latte:text-latte-text mocha:text-mocha-text mb-6">
                        Luma Engine is also available on digital distribution platforms:
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {distributionPlatforms.map((platform, index) => (
                            <a
                                key={index}
                                href="#"
                                className={`px-6 py-3 ${platform.color} text-white rounded-lg font-semibold flex items-center gap-2 transition-colors shadow-md`}
                            >
                                <span className="text-2xl">{platform.icon}</span>
                                {platform.name}
                            </a>
                        ))}
                    </div>
                    <p className="mt-6 text-sm latte:text-latte-subtext0 mocha:text-mocha-subtext0">
                        Note: Digital store versions may have limited features compared to the standalone version.
                    </p>
                </div>

                {/* GitHub Section */}
                <div className="mt-16 latte:bg-latte-mantle mocha:bg-mocha-mantle rounded-xl p-8 shadow-lg">
                    <div className="flex items-start gap-6">
                        <svg className="w-20 h-20 latte:text-latte-text mocha:text-mocha-text flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <div>
                            <h3 className="text-2xl font-bold latte:text-latte-text mocha:text-mocha-text mb-4">
                                Don't want to wait for official releases? You can compile Luma from source!
                            </h3>
                            <ul className="space-y-2 latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                                <li>
                                    Get the source code from the{" "}
                                    <a href="https://github.com/StudioAeon/Luma" className="latte:text-latte-lavender mocha:text-mocha-lavender hover:underline font-medium">
                                        GitHub project page
                                    </a>
                                    .
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MacOS;