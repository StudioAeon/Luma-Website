import React from 'react';

const About = () => {
  return (
      <div className="min-h-screen latte:bg-latte-base mocha:bg-mocha-base">
        {/* Hero Section */}
        <div className="latte:bg-latte-mantle mocha:bg-mocha-mantle py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              About Luma Engine
            </h1>
            <p className="text-xl latte:text-latte-subtext1 mocha:text-mocha-subtext1">
              A modern, open-source 3D game engine built for developers who value performance,
              flexibility, and creative control.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* What is Luma */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              What is Luma Engine?
            </h2>
            <div className="prose latte:prose-slate mocha:prose-invert max-w-none">
              <p className="text-lg latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
                Luma Engine is a high-performance 3D game engine written in modern C++20/23, designed to give
                developers complete control over their creative vision. Built with modularity and extensibility
                at its core, Luma provides the tools needed to create everything from small indie projects to
                ambitious commercial games.
              </p>
              <p className="text-lg latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                Released under the permissive MIT license, Luma is completely free and open-source. You can use
                it for any purpose, modify it to fit your needs, and ship your games without royalties or
                restrictions.
              </p>
            </div>
          </section>

          {/* Key Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-8 text-center">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg latte:bg-latte-mantle mocha:bg-mocha-mantle border latte:border-latte-overlay0 mocha:border-mocha-overlay0">
                <h3 className="text-xl font-semibold latte:text-latte-lavender mocha:text-mocha-lavender mb-3">
                  Modern C++ Architecture
                </h3>
                <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                  Built with C++20/23 for maximum performance and maintainability. Clean, modular codebase
                  designed for extensibility.
                </p>
              </div>

              <div className="p-6 rounded-lg latte:bg-latte-mantle mocha:bg-mocha-mantle border latte:border-latte-overlay0 mocha:border-mocha-overlay0">
                <h3 className="text-xl font-semibold latte:text-latte-lavender mocha:text-mocha-lavender mb-3">
                  Multiple Rendering Backends
                </h3>
                <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                  Support for OpenGL and Vulkan, with an API-agnostic renderer design that makes adding new
                  backends straightforward.
                </p>
              </div>

              <div className="p-6 rounded-lg latte:bg-latte-mantle mocha:bg-mocha-mantle border latte:border-latte-overlay0 mocha:border-mocha-overlay0">
                <h3 className="text-xl font-semibold latte:text-latte-lavender mocha:text-mocha-lavender mb-3">
                  Flexible Scripting
                </h3>
                <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                  Script in C#, Lua, or C++ - choose the language that best fits your workflow and team's
                  expertise.
                </p>
              </div>

              <div className="p-6 rounded-lg latte:bg-latte-mantle mocha:bg-mocha-mantle border latte:border-latte-overlay0 mocha:border-mocha-overlay0">
                <h3 className="text-xl font-semibold latte:text-latte-lavender mocha:text-mocha-lavender mb-3">
                  PBR Rendering
                </h3>
                <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                  Physically-based forward+ HDR renderer with Cook-Torrance BRDF and image-based lighting for
                  realistic visuals.
                </p>
              </div>

              <div className="p-6 rounded-lg latte:bg-latte-mantle mocha:bg-mocha-mantle border latte:border-latte-overlay0 mocha:border-mocha-overlay0">
                <h3 className="text-xl font-semibold latte:text-latte-lavender mocha:text-mocha-lavender mb-3">
                  Multi-threaded Runtime
                </h3>
                <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                  Separate main and render threads ensure smooth performance and responsive gameplay even under
                  heavy load.
                </p>
              </div>

              <div className="p-6 rounded-lg latte:bg-latte-mantle mocha:bg-mocha-mantle border latte:border-latte-overlay0 mocha:border-mocha-overlay0">
                <h3 className="text-xl font-semibold latte:text-latte-lavender mocha:text-mocha-lavender mb-3">
                  Cross-Platform
                </h3>
                <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                  Native support for Windows and Linux, with SDL3 providing consistent window and input
                  abstraction across platforms.
                </p>
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              Development Philosophy
            </h2>
            <p className="text-lg latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
              Luma Engine is being developed with the goal of creating and shipping commercial games. Every feature
              is tested through real-world usage, ensuring that the engine meets the practical needs of game
              production from prototyping through distribution.
            </p>
            <p className="text-lg latte:text-latte-subtext1 mocha:text-mocha-subtext1">
              Beyond games, Luma serves as a platform for education, creative expression, and real-time applications
              - from interactive art installations to data visualization and experimental projects.
            </p>
          </section>

          {/* Roadmap Link */}
          <section className="mb-16 p-8 rounded-lg latte:bg-latte-mantle mocha:bg-mocha-mantle border-l-4 latte:border-latte-lavender mocha:border-mocha-lavender">
            <h2 className="text-2xl font-bold latte:text-latte-text mocha:text-mocha-text mb-4">
              Future Development
            </h2>
            <p className="text-lg latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
              Luma is actively developed with new features and improvements added regularly. Check out our roadmap
              to see what's coming next and how you can contribute to the project's direction.
            </p>
            <a
                href="/blog/articles/2025-roadmap"
                className="inline-block px-6 py-3 latte:bg-latte-lavender mocha:bg-mocha-lavender latte:text-latte-base mocha:text-mocha-base rounded-lg font-semibold latte:hover:bg-latte-mauve mocha:hover:bg-mocha-mauve transition-colors"
            >
              View 2026 Roadmap
            </a>
          </section>

          {/* Team */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-8 text-center">
              The Team
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="p-6 rounded-lg latte:bg-latte-mantle mocha:bg-mocha-mantle border latte:border-latte-overlay0 mocha:border-mocha-overlay0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full latte:bg-latte-lavender mocha:bg-mocha-lavender flex items-center justify-center text-white text-2xl font-bold">
                    A
                  </div>
                  <div>
                    <h3 className="text-xl font-bold latte:text-latte-text mocha:text-mocha-text">
                      Astrix
                    </h3>
                    <p className="latte:text-latte-subtext0 mocha:text-mocha-subtext0">
                      Creator & Lead Developer
                    </p>
                  </div>
                </div>
                <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                  Founder of StudioAeon and primary developer of Luma Engine. Passionate about game engine
                  architecture, graphics programming, and creating tools that empower developers.
                </p>
              </div>
            </div>
          </section>

          {/* Community */}
          <section className="text-center">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              Join the Community
            </h2>
            <p className="text-lg latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-8 max-w-2xl mx-auto">
              Whether you're an indie developer, hobbyist, or industry professional, Luma Engine provides the
              tools you need to bring your creative vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                  href="https://discord.gg/qxhXsMUwCB"
                  className="px-6 py-3 latte:bg-latte-blue mocha:bg-mocha-blue latte:text-latte-base mocha:text-mocha-base rounded-lg font-semibold latte:hover:bg-latte-sapphire mocha:hover:bg-mocha-sapphire transition-colors"
              >
                Join Discord
              </a>
              <a
                  href="https://github.com/StudioAeon/Luma"
                  className="px-6 py-3 latte:bg-latte-surface0 mocha:bg-mocha-surface0 latte:text-latte-text mocha:text-mocha-text rounded-lg font-semibold latte:hover:bg-latte-surface1 mocha:hover:bg-mocha-surface1 transition-colors border latte:border-latte-overlay0 mocha:border-mocha-overlay0"
              >
                View on GitHub
              </a>
              <a
                  href="https://patreon.com/lumaengine"
                  className="px-6 py-3 latte:bg-latte-peach mocha:bg-mocha-peach latte:text-latte-base mocha:text-mocha-base rounded-lg font-semibold latte:hover:bg-latte-maroon mocha:hover:bg-mocha-maroon transition-colors"
              >
                Support on Patreon
              </a>
            </div>
          </section>
        </div>
      </div>
  );
};

export default About;