import Placeholder from '../../assets/Placeholder.png';

function Why() {
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
                           <img imgh="" src={ Placeholder } width="512" height="512" className="w-full h-auto" alt="P1" loading="lazy"/>
                        </div>
                    </div>
                </div>
                <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
                    <div className="md:pt-12 sm:pt-6 lg:pt-20">
                        <h2 className="text-3xl font-bold tracking-tight latte:text-latte-text mocha:text-mocha-text sm:text-4xl"> What and Why. </h2>
                        <div className="mt-6 latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                            <div className="mt-6 space-y-6 latte:text-mocha-subtext1 mocha:text-mocha-subtext1 prose mocha:prose-invert">
                                <p className="text-lg latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                                    Developed in 2025, Luma is a 3D game engine designed to help you create and ship interactive games, applications, and artwork. I built Luma out of our passion for game engine development, aiming to create and release commercial games using my own technology.
                                </p>
                                <p className="text-lg latte:text-latte-subtext1 mocha:text-mocha-subtext1"> Some features and tech: </p>
                               <ul className="list-disc pl-5 latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                                    <li><span className="icon-cpp"></span> Written in C++ with support for Windows and Linux</li>
                                    <li><span className="icon-scripting"></span> Script in C#, Lua, or C++ — whatever fits your workflow.</li>
                                    <li><span className="icon-opengl"></span> OpenGL for rendering, with an API-agnostic renderer</li>
                                    <li><span className="icon-multithread"></span> Multi-threaded runtime (main thread + render thread)</li>
                                    <li><span className="icon-renderer"></span> Physically-based forward+ HDR renderer</li>
                                </ul>
                               <p></p>
                               <p className="text-lg latte:text-latte-subtext1 mocha:text-mocha-subtext1"> Read more on the <a href="/about/" className="font-bold latte:text-latte-blue mocha:text-mocha-blue latte:hover:text-latte-text mocha:hover:text-mocha-text">About</a> page. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 }
 
 export default Why;