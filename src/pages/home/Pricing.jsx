function Pricing() {
    return (
        <div className="latte:bg-latte-base mocha:bg-mocha-base py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold latte:text-latte-text mocha:text-mocha-text sm:text-4xl lg:text-5xl">
                        Pricing
                    </h2>
                    <p className="mt-4 text-xl latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                        Luma Engine is free and open source, but you can support the project.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
                    {/* Everyone - Free */}
                    <div className="relative flex flex-col rounded-2xl border-2 latte:border-latte-overlay0 mocha:border-mocha-overlay0 latte:bg-latte-mantle mocha:bg-mocha-mantle p-8 shadow-lg">
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold latte:text-latte-text mocha:text-mocha-text">
                                Everyone
                            </h3>
                            <p className="mt-4 flex items-baseline latte:text-latte-text mocha:text-mocha-text">
                                <span className="text-5xl font-extrabold tracking-tight">Free</span>
                            </p>
                            <p className="mt-6 latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                                You can develop for the Windows and Linux platforms for free.
                            </p>
                        </div>
                        <a
                            href="/download"
                            className="mt-8 block w-full py-3 px-6 text-center rounded-md latte:bg-latte-surface0 mocha:bg-mocha-surface0 latte:text-latte-text mocha:text-mocha-text font-medium latte:hover:bg-latte-surface1 mocha:hover:bg-mocha-surface1 transition-colors"
                        >
                            Download
                        </a>
                    </div>

                    {/* Supporter */}
                    <div className="relative flex flex-col rounded-2xl border-2 latte:border-latte-peach mocha:border-mocha-peach latte:bg-latte-peach/10 mocha:bg-mocha-peach/10 p-8 shadow-xl transform scale-105">
                        <div className="absolute top-0 right-6 transform -translate-y-1/2">
                            <span className="inline-flex rounded-full latte:bg-latte-peach mocha:bg-mocha-peach px-4 py-1 text-sm font-semibold latte:text-latte-base mocha:text-mocha-base">
                                👑 Popular
                            </span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold latte:text-latte-text mocha:text-mocha-text">
                                Supporter 👑
                            </h3>
                            <p className="mt-4 flex items-baseline latte:text-latte-text mocha:text-mocha-text">
                                <span className="text-5xl font-extrabold tracking-tight">$5.00</span>
                                <span className="ml-1 text-xl font-semibold latte:text-latte-subtext1 mocha:text-mocha-subtext1">/month</span>
                            </p>
                            <p className="mt-6 latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                                Support further development and get exclusive content.
                            </p>
                            <p className="mt-2 latte:text-latte-subtext1 mocha:text-mocha-subtext1 font-medium">
                                Thank you!
                            </p>
                        </div>
                        <a
                            href="https://patreon.com/lumaengine"
                            className="mt-8 block w-full py-3 px-6 text-center rounded-md latte:bg-latte-peach mocha:bg-mocha-peach latte:text-latte-base mocha:text-mocha-base font-medium latte:hover:bg-latte-peach/90 mocha:hover:bg-mocha-peach/90 transition-colors shadow-md"
                        >
                            Become a supporter!
                        </a>
                    </div>

                    {/* Console Developer */}
                    <div className="relative flex flex-col rounded-2xl border-2 latte:border-latte-overlay0 mocha:border-mocha-overlay0 latte:bg-latte-mantle mocha:bg-mocha-mantle p-8 shadow-lg">
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold latte:text-latte-text mocha:text-mocha-text">
                                Console developer
                            </h3>
                            <p className="mt-4 flex items-baseline latte:text-latte-text mocha:text-mocha-text">
                                <span className="text-5xl font-extrabold tracking-tight">N/A</span>
                            </p>
                            <p className="mt-6 latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                                There are currently no plans for console platform support, though this may change in the future based on project direction and community needs.
                            </p>
                        </div>
                        <a
                            href="mailto:contact@example.com"
                            className="mt-8 block w-full py-3 px-6 text-center rounded-md latte:bg-latte-surface0 mocha:bg-mocha-surface0 latte:text-latte-text mocha:text-mocha-text font-medium latte:hover:bg-latte-surface1 mocha:hover:bg-mocha-surface1 transition-colors"
                        > {/* TODO: Proper email */}
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;