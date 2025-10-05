import React from "react";

const Linux = () => {
    const downloadLinks = [
        {
            name: "Linux - x86_64",
            subtitle: "x86_64",
            version: "1.0.0",
            date: "15 September 2025"
        },
        {
            name: "Linux - ARM64",
            subtitle: "ARM64",
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
                        backgroundImage: "url('https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                />
                <div className="absolute inset-0 latte:bg-latte-base/80 mocha:bg-mocha-base/80" />

                {/* Content */}
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl sm:text-6xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
                        Download Luma Engine
                        <br />
                        for Linux
                    </h1>

                    {/* Primary Download Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                        <a
                            href="https://github.com/StudioAeon/Luma/releases/latest"
                            className="group w-full sm:w-auto px-8 py-4 latte:bg-latte-lavender mocha:bg-mocha-lavender latte:text-latte-base mocha:text-mocha-base rounded-lg font-semibold text-lg shadow-lg latte:hover:bg-latte-mauve mocha:hover:bg-mocha-mauve transition-all transform hover:scale-105 flex items-center justify-between"
                        >
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.84-.41 1.684-.287 2.489.845 5.331 5.177 7.625 8.205 7.625.03 0 .084 0 .113-.008 4.687-.058 4.515-4.034 4.577-5.49.046-.896.068-1.641.129-2.394.129-1.579.803-2.863 1.529-4.134.686-1.204 1.174-2.47 1.174-4.016 0-3.816-2.691-7.682-8.024-7.932zm.647 7.646c-.355.058-.676-.007-.926-.215.076-.3.068-.676-.091-.953-.164-.276-.491-.414-.805-.338-.107.022-.214.053-.322.092-.164.091-.322.191-.469.307-.061.046-.114.092-.176.146-.084.069-.152.145-.206.222-.069.084-.107.168-.137.252-.061.145-.069.307-.061.468.015.168.046.337.099.506.053.168.122.337.206.506.084.168.183.337.296.498.114.168.244.33.393.483.152.153.317.291.5.414.187.122.387.23.601.322.215.092.438.168.671.23.237.053.483.084.746.107.191.015.383.015.586 0 .203-.022.407-.046.617-.091.203-.046.407-.107.601-.168.195-.061.387-.138.571-.222.187-.084.36-.176.532-.276.168-.099.329-.214.483-.33.152-.122.295-.252.426-.387.137-.137.259-.29.372-.452.114-.168.213-.345.295-.535.076-.191.137-.393.176-.603.046-.213.061-.438.061-.663 0-.23-.015-.453-.046-.676-.022-.222-.061-.438-.122-.653-.061-.214-.137-.421-.228-.623-.091-.206-.195-.407-.313-.603-.122-.191-.26-.376-.407-.545-.152-.168-.322-.329-.506-.483-.183-.15-.376-.283-.586-.406-.214-.122-.438-.222-.671-.314-.237-.091-.483-.161-.746-.214-.261-.061-.532-.099-.816-.122-.203-.015-.407-.022-.617-.015-.203.007-.407.022-.601.053-.195.038-.383.091-.571.161-.18.068-.352.153-.524.245-.161.091-.321.191-.469.307l.007.007c-.061.046-.122.091-.183.145-.054.069-.099.145-.145.222-.053.084-.091.168-.122.252-.046.145-.061.307-.053.468.015.168.053.337.114.506.061.168.137.337.229.498.091.168.198.337.313.491.114.161.244.314.387.46.145.145.31.283.498.399.187.115.387.206.601.276.215.076.438.137.671.183.237.045.483.068.746.084.191.015.383.015.586 0 .203-.022.407-.046.617-.091.203-.046.407-.107.601-.168.195-.061.387-.138.571-.222.187-.084.36-.176.532-.276.168-.099.329-.214.483-.33.152-.122.295-.252.426-.387.137-.137.259-.29.372-.452.114-.168.213-.345.295-.535.076-.191.137-.393.176-.603.046-.213.061-.438.061-.663 0-.23-.015-.453-.046-.676z"/>
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
                        Looking for <a href="/download/windows" className="latte:text-latte-lavender mocha:text-mocha-lavender hover:underline">Windows</a> or <a href="/download/macos" className="latte:text-latte-lavender mocha:text-mocha-lavender hover:underline">macOS</a>?
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
                        <a href="/download/macos" className="px-6 py-2 latte:bg-latte-surface1 mocha:bg-mocha-surface1 latte:text-latte-text mocha:text-mocha-text rounded-lg font-medium whitespace-nowrap latte:hover:bg-latte-surface2 mocha:hover:bg-mocha-surface2">
                            macOS
                        </a>
                        <a href="/download/linux" className="px-6 py-2 latte:bg-latte-lavender mocha:bg-mocha-lavender latte:text-latte-base mocha:text-mocha-base rounded-lg font-medium whitespace-nowrap">
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
                                <span>OpenGL 4.5 compatible hardware</span>
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

export default Linux;