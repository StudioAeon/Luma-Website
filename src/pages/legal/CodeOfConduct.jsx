import React from 'react';

const CodeOfConduct = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-mocha-text">Code of Conduct</h1>
      <p className="mt-4 text-lg text-mocha-subtext0 text-center">
        Our community is built on respect, inclusivity, and collaboration. To ensure a welcoming environment, we ask all members to follow these guidelines.
      </p>

      <div className="mt-8 space-y-6">
        <section className="p-6 border rounded-lg shadow-lg bg-mocha-crust">
          <h2 className="text-2xl font-semibold text-mocha-text">1. Be Respectful</h2>
          <p className="text-mocha-subtext0">
            Treat everyone with kindness and professionalism. Harassment, discrimination, and hate speech will not be tolerated.
          </p>
        </section>

        <section className="p-6 border rounded-lg shadow-lg bg-mocha-crust">
          <h2 className="text-2xl font-semibold text-mocha-text">2. Keep It Inclusive</h2>
          <p className="text-mocha-subtext0">
            We welcome developers from all backgrounds. Ensure your interactions and contributions foster a diverse and inclusive space.
          </p>
        </section>

        <section className="p-6 border rounded-lg shadow-lg bg-mocha-crust">
          <h2 className="text-2xl font-semibold text-mocha-text">3. Collaborate and Support</h2>
          <p className="text-mocha-subtext0">
            Share knowledge, provide constructive feedback, and help others grow. A strong community thrives on collaboration.
          </p>
        </section>

        <section className="p-6 border rounded-lg shadow-lg bg-mocha-crust">
          <h2 className="text-2xl font-semibold text-mocha-text">4. Follow Licensing and Attribution</h2>
          <p className="text-mocha-subtext0">
            Respect intellectual property rights. Always give credit where it's due and adhere to the project's licensing terms.
          </p>
        </section>

        <section className="p-6 border rounded-lg shadow-lg bg-mocha-crust">
          <h2 className="text-2xl font-semibold text-mocha-text">5. Enforcement</h2>
          <p className="text-mocha-subtext0">
            Violations of this Code of Conduct will be reviewed by the moderation team. Actions may include warnings, removal from discussions, or banning in extreme cases.
          </p>
        </section>
      </div>

      <p className="mt-8 text-center text-mocha-subtext1">
        Thank you for being part of the Luma Engine community! 💙
      </p>
    </div>
  );
};

export default CodeOfConduct;
