import React from "react";

const Footer = () => {
    const navLinks = [
      { href: "/documentation/", title: "Documentation" },
      { href: "/about/", title: "About" },
      { href: "https://github.com/StudioAeon/Luma", title: "Source Code" },
      { href: "/code-of-conduct/", title: "Code Of Conduct" },
      { href: "/privacy-policy/", title: "Privacy Policy" },
      { href: "/license/", title: "License" },
    ];

    const socialLinks = [
      {
        href: "https://github.com/StudioAeon/Luma",
        label: "GitHub",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
          </svg>
        ),
      },
      {
        href: "https://discord.gg/qxhXsMUwCB",
        label: "Discord",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.078.037c-.211.375-.444.864-.608 1.25a18.707 18.707 0 00-5.486 0c-.167-.385-.403-.875-.616-1.25a.076.076 0 00-.078-.037 19.744 19.744 0 00-4.885 1.515.07.07 0 00-.032.028C2.195 9.043 1.565 13.63 1.928 18.155a.08.08 0 00.03.056c2.062 1.516 4.064 2.435 6.032 3.04a.077.077 0 00.084-.028c.465-.636.872-1.31 1.21-2.017a.076.076 0 00-.04-.104 11.348 11.348 0 01-1.612-.773.077.077 0 01-.008-.128c.108-.08.216-.163.318-.248a.074.074 0 01.077-.01c3.387 1.545 7.062 1.545 10.403 0a.073.073 0 01.078.01c.102.085.21.168.318.248a.077.077 0 01-.008.128c-.52.303-1.063.56-1.612.773a.076.076 0 00-.04.104c.352.707.76 1.38 1.21 2.017a.076.076 0 00.084.028c1.98-.605 3.984-1.524 6.032-3.04a.08.08 0 00.03-.056c.372-4.525-.27-9.112-2.131-13.758a.07.07 0 00-.031-.028zM8.02 15.587c-1.183 0-2.155-1.085-2.155-2.419 0-1.332.949-2.42 2.155-2.42 1.217 0 2.173 1.1 2.155 2.42 0 1.334-.949 2.419-2.155 2.419zm7.975 0c-1.183 0-2.155-1.085-2.155-2.419 0-1.332.949-2.42 2.155-2.42 1.217 0 2.173 1.1 2.155 2.42 0 1.334-.949 2.419-2.155 2.419z" />
          </svg>
        ),
      },
      {
        href: "https://patreon.com/lumaengine",
        label: "Patreon",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M0 0v24h4V0H0zm16 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
          </svg>
        ),
      },
    ];

    return (
      <footer className="bg-mocha-crust w-full">
        <div className="max-w-7xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
          <nav className="grid grid-cols-2 gap-4 text-center sm:flex sm:flex-wrap sm:justify-center sm:space-x-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-mocha-text hover:text-gray-200 py-2">
                {link.title}
              </a>
            ))}
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            {socialLinks.map((social) => (
              <a key={social.href} href={social.href} target="_blank" aria-label={social.label} className="text-mocha-text hover:text-gray-200">
                {social.icon}
              </a>
            ))}
          </div>
          <p className="mt-8 text-mocha-text text-center">
            &copy; 2025 StudioAeon. All rights reserved.
            <br />
            Website built with React, TailwindCSS, and Vite.
          </p>
        </div>
      </footer>
    );
  };

  export default Footer;
