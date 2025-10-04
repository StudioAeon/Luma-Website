import Placeholder2 from '../../assets/Placeholder2.png';

function How() {
    return (
        <div className="overflow-hidden latte:bg-latte-base mocha:bg-mocha-base sm:pt-6 lg:relative">
            <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-12 lg:px-8">
                <div>
                    <div className="md:mt-8">
                        <div className="mt-6 mb-6 sm:max-w-xl">
                            <h2 className="text-3xl font-extrabold tracking-tight latte:text-latte-text mocha:text-mocha-text sm:text-4xl md:mt-16">How do I get the Enigne?</h2>
                            <p className="mt-4 text-lg latte:text-latte-subtext1 mocha:text-mocha-subtext1"> Luma is <strong>free and open source</strong>. You can download the engine and start building without any subscriptions or restrictions.</p>
                            <p className="mt-4 text-lg latte:text-latte-subtext1 mocha:text-mocha-subtext1"> All development happens openly on{" "} <a href="https://github.com/StudioAeon"  className="font-bold latte:text-latte-blue mocha:text-mocha-blue latte:hover:text-latte-text mocha:hover:text-mocha-text"> GitHub </a>, where you’ll find the source code, documentation, and community projects.</p>
                            <p className="mt-4 text-lg latte:text-latte-subtext1 mocha:text-mocha-subtext1"> Anyone can create and publish games with Luma at no cost. Contributions from the community help the engine grow, and together we’re building powerful tools for developers everywhere.</p>
                            <p></p>
                            <div className="mt-6">
                                <a href="https://github.com/StudioAeon/Luma">
                                    <button type="button" className="block w-full px-5 py-3 text-xl font-medium latte:text-latte-surface0 mocha:text-mocha-surface0 latte:bg-latte-lavender mocha:bg-mocha-lavender border border-transparent rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 latte:focus:ring-latte-overlay0 latte:focus:ring-offset-latte-overlay2 mocha:focus:ring-mocha-overlay0 mocha:focus:ring-offset-mocha-overlay2 sm:px-10">Github</button>
                                </a>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                <div className="md:py-12 sm:relative sm:mt-12 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <div className="hidden sm:block">
                        <div className="absolute inset-y-0 w-screen left-1/2 rounded-l-3xl latte:bg-latte-base mocha:bg-mocha-base/30 lg:left-80 lg:right-0 lg:w-full"></div>
                        <svg className="absolute -mr-3 top-8 right-1/2 lg:left-0 lg:m-0" width="404" height="392" fill="none" viewBox="0 0 404 392" loading="lazy">
                            <defs>
                                <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" className="latte:text-mocha-text mocha:text-latte-text/60" fill="currentcolor"></rect>
                                </pattern>
                            </defs>
                            <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect>
                        </svg>
                    </div>
                    <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
                    <img imgh="" src={ Placeholder2 } width="753" height="548" alt="p2" className="w-full rounded-lg shadow-xl lg:h-full lg:w-auto lg:max-w-none" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    )
 }
 
 export default How;