import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto text-center p-8">
      <h1 className="text-4xl font-bold text-mocha-text">About Luma Engine</h1>
      <p className="mt-4 text-lg text-mocha-subtext0">
        Luma Engine is a cutting-edge, high-performance game engine designed for developers who want power, flexibility, and ease of use.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="p-6 border rounded-lg shadow-lg bg-mocha-crust">
          <h2 className="text-2xl font-semibold text-mocha-text">Why Choose Luma?</h2>
          <ul className="mt-4 text-mocha-subtext0 text-left list-disc list-inside">
            <li>⚡ Blazing-fast rendering with optimized performance</li>
            <li>🛠️ Fully customizable and open-source</li>
            <li>🎮 Built for both 2D and 3D game development</li>
            <li>🚀 Cross-platform support for Windows & Linux</li>
          </ul>
        </div>

        <div className="p-6 border rounded-lg shadow-lg bg-mocha-crust">
          <h2 className="text-2xl font-semibold text-mocha-text">Key Features</h2>
          <ul className="mt-4 text-mocha-subtext0 text-left list-disc list-inside">
            <li>🔹 Modern rendering pipeline (Vulkan & DirectX)</li>
            <li>🔹 Powerful scripting with Lua & C#</li>
            <li>🔹 Dynamic physics engine & real-time debugging</li>
            <li>🔹 Intuitive UI and developer-friendly tools</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-mocha-text">Join Our Community</h2>
        <p className="mt-2 text-mocha-subtext0">
          Whether you're an indie developer or part of a studio, Luma Engine provides everything you need to bring your ideas to life.  
        </p>
        <p className="mt-2 text-mocha-subtext0">
          Join us on <a href="https://discord.gg/qxhXsMUwCB" className="text-mocha-blue underline hover:text-mocha-sapphire">Discord</a> or follow our updates on <a href="https://github.com/rrandel-tech/Luma" className="text-mocha-blue underline hover:text-mocha-sapphire">GitHub</a>.
        </p>
      </div>
    </div>
  );
};

export default About;
