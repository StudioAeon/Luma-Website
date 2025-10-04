function NotFound() {
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 bg-mocha-base">
      <div className="max-w-screen-sm mx-auto text-center">
        <h1 className="text-8xl lg:text-7xl xl:text-9xl font-black tracking-tight mb-4 text-mocha-text">404</h1>
        <p className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-mocha-text">Oops, something's missing.</p>
        <p className="text-lg font-light mb-4 text-mocha-subtext0"> Sorry we can't find that page. You'll find a lot to explore on the homepage. </p>
        <a href="/" className="block w-full px-5 py-3 text-xl font-medium text-mocha-surface0 bg-mocha-lavender border border-transparent rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mocha-overlay0 focus:ring-offset-mocha-overlay2 sm:px-10"> Back to Homepage </a>
      </div>
    </div>
  );
}

export default NotFound;