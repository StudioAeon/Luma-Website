import React from 'react';

const License = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-mocha-text">Luma Engine License</h1>
      <p className="mt-4 text-lg text-mocha-subtext0 text-center">
        Luma Engine is free and open-source software, released under the permissive MIT License.
      </p>

      <div className="mt-8 p-6 border rounded-lg shadow-lg bg-mocha-crust">
        <h2 className="text-2xl font-semibold text-mocha-text">License Overview</h2>
        <p className="text-mocha-subtext0 mt-2">
          The MIT License grants users the following freedoms:
        </p>
        <ul className="list-disc pl-6 mt-2 text-mocha-subtext0">
          <li>You are free to use Luma Engine for any purpose, including commercial projects.</li>
          <li>You can study, modify, and distribute both modified and unmodified versions.</li>
          <li>You may distribute it under a different license, including proprietary ones.</li>
        </ul>
        <p className="mt-4 text-mocha-subtext0">
          However, when redistributing, you must include the copyright notice and license statement of Luma Engine.
        </p>
      </div>

      <div className="mt-8 p-6 border rounded-lg shadow-lg bg-mocha-crust">
        <h2 className="text-2xl font-semibold text-mocha-text">Your Projects</h2>
        <p className="text-mocha-subtext0 mt-2">
          The Luma Engine license does not apply to projects created using it. You are free to license your work however you see fit.
        </p>
        <p className="mt-2 text-mocha-subtext0">
          If you distribute a project that includes Luma Engine, you must include its MIT License.
        </p>
      </div>

      <div className="mt-8 p-6 border rounded-lg shadow-lg bg-mocha-crust">
        <h2 className="text-2xl font-semibold text-mocha-text">MIT License</h2>
        <p className="text-sm text-mocha-subtext0 mt-2">Copyright &copy; {new Date().getFullYear()} StudioAeon</p>
        <pre className="mt-4 p-4 text-sm text-mocha-subtext1 bg-mocha-base rounded-lg whitespace-pre-wrap">
          {`Permission is hereby granted, free of charge, to any person obtaining a copy
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

      <div className="mt-8 p-6 border rounded-lg shadow-lg bg-mocha-crust">
        <h2 className="text-2xl font-semibold text-mocha-text">Third-Party Components</h2>
        <p className="text-mocha-subtext0 mt-2">
          Luma Engine includes third-party libraries, which are subject to their own licenses. These licenses are compatible with the MIT License and are listed in our documentation.
        </p>
      </div>

      <div className="mt-8 p-6 border rounded-lg shadow-lg bg-mocha-crust">
        <h2 className="text-2xl font-semibold text-mocha-text">Disclaimer</h2>
        <p className="text-mocha-subtext0 mt-2">
          This explanation of the Luma Engine license is not legal advice. If you have questions about compliance, consult a legal professional.
        </p>
      </div>

      <p className="mt-8 text-center text-mocha-subtext1">
        By using this software, you agree to the terms outlined above. 🚀
      </p>
    </div>
  );
};

export default License;
