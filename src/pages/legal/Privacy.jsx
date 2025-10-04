import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-mocha-text">Privacy Policy</h1>
      <p className="mt-4 text-lg text-mocha-subtext0 text-center">
        Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your data.
      </p>

      <div className="mt-8 p-6 border rounded-lg shadow-lg bg-mocha-crust">
        <h2 className="text-2xl font-semibold text-mocha-text">1. Information We Collect</h2>
        <p className="mt-2 text-mocha-subtext0">
          We may collect personal information such as your name, email address, and usage data when you interact with our website or services.
        </p>

        <h2 className="text-2xl font-semibold text-mocha-text mt-6">2. How We Use Your Information</h2>
        <p className="mt-2 text-mocha-subtext0">
          We use collected data to improve our services, respond to inquiries, and enhance user experience. Your data will not be sold or shared with third parties without your consent.
        </p>

        <h2 className="text-2xl font-semibold text-mocha-text mt-6">3. Cookies and Tracking</h2>
        <p className="mt-2 text-mocha-subtext0">
          We use cookies to track usage and improve functionality. You can disable cookies in your browser settings if you prefer.
        </p>

        <h2 className="text-2xl font-semibold text-mocha-text mt-6">4. Data Security</h2>
        <p className="mt-2 text-mocha-subtext0">
          We take reasonable measures to protect your personal data. However, no online system is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold text-mocha-text mt-6">5. Your Rights</h2>
        <p className="mt-2 text-mocha-subtext0">
          You have the right to access, modify, or delete your personal data. Contact us if you wish to exercise these rights.
        </p>

        <h2 className="text-2xl font-semibold text-mocha-text mt-6">6. Changes to This Policy</h2>
        <p className="mt-2 text-mocha-subtext0">
          We may update this Privacy Policy occasionally. Any changes will be posted here with an updated revision date.
        </p>
      </div>

      <p className="mt-8 text-center text-mocha-subtext1">
        If you have any questions about this Privacy Policy, contact us at <a href="mailto:support@zenithengine.com" className="text-mocha-text underline">support@zenithengine.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
