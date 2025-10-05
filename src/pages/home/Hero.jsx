import { homeImages } from "../../constants/images";

function Hero() {
    return (
        <div className="latte:bg-gradient-to-r from-latte-base to-mocha-base mocha:bg-gradient-to-r from-mocha-base to-latte-base">
            <div className="max-w-screen-xl px-4 py-8 mx-auto">
                <div className="grid items-center gap-8 mb-8 sm:mb-0 lg:gap-12 lg:grid-cols-12">
                    <div className="col-span-6 px-4 text-center sm:mb-6 lg:text-left lg:mb-0">
                        <h1 className="mb-2 text-6xl font-extrabold leading-none tracking-tight latte:text-latte-text mocha:text-mocha-text md:text-7xl xl:text-8xl">Luma Engine</h1>
                        <h2 className="pb-2 text-3xl font-light latte:text-latte-subtext1 mocha:text-mocha-subtext1 md:text-4xl">Interactive 3D development platform</h2>
                        <p className="max-w-xl mx-auto mb-6 font-normal latte:text-latte-subtext0 mocha:text-mocha-subtext0 lg:mx-0 xl:mb-2 md:text-lg xl:text-xl">
                            Luma is a simple-yet-powerful 3D game engine made by Astrix, available for use now with big plans for the future.
                        </p>
                        <div className="mt-6">
                            <a href="/download">
                                <button type="button" className="block w-full px-5 py-3 text-xl font-medium latte:text-latte-surface0 mocha:text-mocha-surface0 latte:bg-latte-lavender mocha:bg-mocha-lavender border border-transparent rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 latte:focus:ring-latte-overlay0 latte:focus:ring-offset-latte-overlay2 mocha:focus:ring-mocha-overlay0 mocha:focus:ring-offset-mocha-overlay2 sm:px-10 transition-transform transform hover:scale-105 hover:shadow-lg">
                                    Get Luma
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <img src={homeImages.luma512} width="100%" height="100%" alt="Luma Logo" className="w-full max-w-xl mx-auto rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
