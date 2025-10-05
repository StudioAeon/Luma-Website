import React from "react";

const Windows = () => {
    const downloadLinks = [
        {
            name: "Windows - x86_64",
            subtitle: "x86_64",
            version: "1.0.0",
            date: "15 September 2025"
        },
    ];

    const distributionPlatforms = [
        { name: "Steam", icon: "🎮", color: "bg-blue-600 hover:bg-blue-700" },
    ];

    return (
        <div className="min-h-screen latte:bg-latte-base mocha:bg-mocha-base">
            {/* Hero Section with Background */}
            <div className="relative overflow-hidden py-16 sm:py-20">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1920&q=80')",
                    }}
                />
                <div className="absolute inset-0 latte:bg-latte-base/80 mocha:bg-mocha-base/80" />

                {/* Content */}
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl sm:text-6xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
                        Download Luma Engine
                        <br />
                        for Windows
                    </h1>

                    {/* Primary Download Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                        <a
                            href="#" //TODO
                            className="group w-full sm:w-auto px-8 py-4 latte:bg-latte-lavender mocha:bg-mocha-lavender latte:text-latte-base mocha:text-mocha-base rounded-lg font-semibold text-lg shadow-lg latte:hover:bg-latte-mauve mocha:hover:bg-mocha-mauve transition-all transform hover:scale-105 flex items-center justify-between"
                        >
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                                </svg>
                                <span>Luma Engine</span>
                            </div>
                            <span className="ml-6 px-3 py-1 latte:bg-latte-base/20 mocha:bg-mocha-base/20 rounded text-sm">
                                1.0.0
                            </span>
                        </a>
                    </div>

                    <p className="mt-4 latte:text-latte-subtext0 mocha:text-mocha-subtext0 text-sm">
                        x86_64 - 15 September 2025
                    </p>

                    <p className="mt-8 latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                        Looking for <a href="/download/macos" className="latte:text-latte-lavender mocha:text-mocha-lavender hover:underline">macOS</a> or <a href="/download/linux" className="latte:text-latte-lavender mocha:text-mocha-lavender hover:underline">Linux</a>?
                    </p>
                </div>
            </div>

            {/* Platform Tabs */}
            <div className="latte:bg-latte-surface0 mocha:bg-mocha-surface0 border-b latte:border-latte-overlay0 mocha:border-mocha-overlay0">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-2 overflow-x-auto py-4 justify-center">
                        <a href="/download/windows" className="px-6 py-2 latte:bg-latte-lavender mocha:bg-mocha-lavender latte:text-latte-base mocha:text-mocha-base rounded-lg font-medium whitespace-nowrap">
                            Windows
                        </a>
                        <a href="/download/macos" className="px-6 py-2 latte:bg-latte-surface1 mocha:bg-mocha-surface1 latte:text-latte-text mocha:text-mocha-text rounded-lg font-medium whitespace-nowrap latte:hover:bg-latte-surface2 mocha:hover:bg-mocha-surface2">
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
                                <span>Vulkan 1.3 compatible hardware</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-semibold latte:text-latte-text mocha:text-mocha-text mr-2">Minimal:</span>
                                <span>OpenGL 4.5 / DirectX 11 compatible hardware</span>
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
                                <a href="https://lumadocs.com/troubleshooting" className="latte:text-latte-lavender mocha:text-mocha-lavender hover:underline"> {/* TODO: proper link */}
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
                                href="#" //TODO
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
                                href="#" //TODO
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

export default Windows;