import { homeImages } from "../../constants/images";

function Future() {
    return (
        <div className="relative latte:bg-latte-base mocha:bg-mocha-mantle">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
                <div className="relative sm:py-8 lg:py-0">
                    <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                        <div className="absolute inset-y-0 w-full latte:bg-latte-base mocha:bg-mocha-mantle/10 right-1/2 rounded-r-3xl lg:right-72"></div>
                            <svg className="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392" loading="lazy">
                                <defs>
                                    <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="4" height="4" className="latte:text-mocha-text mocha:text-latte-text/60" fill="currentcolor"></rect>
                                    </pattern>
                                </defs>
                                <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"></rect>
                            </svg>
                        </div>
                    <div className="relative w-full h-auto px-4 py-6 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:py-20">
                        <div className="overflow-hidden shadow-xl rounded-2xl">
                            <img imgh="" src={ homeImages.placeholder3 } width="1567" height="1320" className="w-full h-auto" alt="P3" loading="lazy" />
                        </div>
                    </div>
                </div>
                <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
                    <div className="md:pt-12 sm:pt-6 lg:pt-20">
                        <h2 className="text-3xl font-bold tracking-tight latte:text-latte-text mocha:text-mocha-text sm:text-4xl">Future plans and direction.</h2>
                        <div className="mt-6 latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                            <div className="mt-6 space-y-6 latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                                <p className="text-lg latte:text-latte-subtext1 mocha:text-mocha-subtext1">I have some serious future plans.</p>
                                <p className="text-lg latte:text-latte-subtext1 mocha:text-mocha-subtext1">Firstly, one of my primary motivations for developing Luma is using it to create and release commercial games. That means im dedicated to ensuring that Luma is a stable and well-made product capable of facilitating video game production end-to-end, from the very start of prototyping and pre-production to shipping and distribution.</p>
                                <p className="text-lg latte:text-latte-subtext1 mocha:text-mocha-subtext1">I also see Luma as a platform for art, education, and real-time applications. I regularly use it for <a href="https://youtu.be/Aq5WXmQQooo?si=bcLEACWeJ9ygECz-" className="font-bold latte:text-latte-blue mocha:text-mocha-blue latte:hover:text-latte-text mocha:hover:text-mocha-text">math/data visualization</a>, creating interactive applications, and with the currently-in-development path tracer I’ve also been exploring offline rendering and cinematic tools for both static and moving images.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 }
 
 export default Future;