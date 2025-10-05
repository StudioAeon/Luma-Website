import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const License = () => {
    const location = useLocation();

    const getActiveTab = () => {
        if (location.pathname === '/license') return 'license';
        if (location.pathname === '/privacy-policy') return 'privacy';
        if (location.pathname === '/code-of-conduct') return 'conduct';
        return 'license';
    };

    const tabs = [
        { id: 'license', label: 'License', path: '/license' },
        { id: 'privacy', label: 'Privacy', path: '/privacy-policy' },
        { id: 'conduct', label: 'Code of Conduct', path: '/code-of-conduct' },
    ];

    const activeTab = getActiveTab();

    return (
        <div className="min-h-screen latte:bg-latte-base mocha:bg-mocha-base">
            {/* Header with Title */}
            <div className="latte:bg-latte-mantle mocha:bg-mocha-mantle py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-bold latte:text-latte-text mocha:text-mocha-text">
                        License
                    </h1>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="latte:bg-latte-surface0 mocha:bg-mocha-surface0 border-b latte:border-latte-overlay0 mocha:border-mocha-overlay0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex space-x-8 overflow-x-auto">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.id}
                                to={tab.path}
                                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                                    activeTab === tab.id
                                        ? 'latte:border-latte-lavender mocha:border-mocha-lavender latte:text-latte-lavender mocha:text-mocha-lavender'
                                        : 'border-transparent latte:text-latte-subtext0 mocha:text-mocha-subtext0 latte:hover:text-latte-text mocha:hover:text-mocha-text latte:hover:border-latte-overlay0 mocha:hover:border-mocha-overlay0'
                                }`}
                            >
                                {tab.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* The Engine Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
                        The engine
                    </h2>
                    <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
                        Luma Engine is free and open source software released under the permissive{' '}
                        <a href="https://opensource.org/licenses/MIT" className="latte:text-latte-lavender mocha:text-mocha-lavender hover:underline">
                            MIT license
                        </a>{' '}
                        (also named Expat license).
                    </p>
                    <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
                        This license grants users a number of freedoms:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
                        <li>You are free to use Luma Engine, for any purpose</li>
                        <li>You can study how Luma Engine works and change it</li>
                        <li>
                            You can distribute unmodified and changed versions of Luma Engine, even commercially and
                            under a different license (including proprietary)
                        </li>
                    </ul>
                    <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                        The only restriction to that third freedom is that you need to distribute the copyright notice
                        and license statement of Luma Engine whenever you redistribute it. So your derivative product may
                        have a different license, but should still state in its documentation that it derives from the
                        MIT licensed Luma Engine (see below).
                    </p>
                </section>

                {/* Your Game Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
                        Your game
                    </h2>
                    <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
                        Luma Engine's license terms and copyright do not apply to the content you create with it; you are
                        free to license your games how you see best fit, and will be their sole copyright owner(s).
                    </p>
                    <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
                        Note however that the Luma Engine binary that you would distribute with your game is a copy of
                        the "Software" as defined in the license, and you are therefore required to include the
                        copyright notice and license statement somewhere in your documentation.
                    </p>
                    <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                        The Luma Engine developers consider that a link to this page in your game documentation or
                        credits would be an acceptable way to satisfy the license terms.
                    </p>
                </section>

                {/* License Text Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
                        License text
                    </h2>
                    <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
                        A plain text version of the license is available from Luma Engine's GitHub repository:{' '}
                        <a href="https://github.com/StudioAeon/Luma/blob/main/LICENSE" className="latte:text-latte-lavender mocha:text-mocha-lavender hover:underline">
                            LICENSE.txt
                        </a>
                        .
                    </p>

                    <div className="latte:bg-latte-mantle mocha:bg-mocha-mantle rounded-lg p-6 border latte:border-latte-overlay0 mocha:border-mocha-overlay0">
                        <pre className="text-sm latte:text-latte-subtext1 mocha:text-mocha-subtext1 whitespace-pre-wrap font-mono">
{`Copyright (c) ${new Date().getFullYear()} StudioAeon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
                        </pre>
                    </div>
                </section>

                {/* Third-party Components Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
                        Third-party components
                    </h2>
                    <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                        Luma Engine uses several third-party libraries and code snippets, which are distributed under
                        their own license and copyright statements. All such components are compatible with the terms of
                        Luma Engine's MIT license. You can refer to{' '}
                        <a href="https://github.com/StudioAeon/Luma/blob/main/THIRD_PARTY.md" className="latte:text-latte-lavender mocha:text-mocha-lavender hover:underline">
                            this list
                        </a>{' '}
                        for a comprehensive overview of all third-party components used in Luma Engine and their
                        respective licenses.
                    </p>
                </section>

                {/* Disclaimer Section */}
                <section>
                    <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
                        Disclaimer
                    </h2>
                    <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
                        The above explanations of Luma Engine's license terms and their implications for its users do not
                        constitute legal advice. They reflect the Luma Engine team's understanding of their own license
                        terms and that of their third-party components; in case of doubt, please refer to your lawyer.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default License;
