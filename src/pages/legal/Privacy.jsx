import React, { useState } from 'react';

const PrivacyPolicy = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  const tabs = [
    { id: 'license', label: 'License', href: '/license' },
    { id: 'privacy', label: 'Privacy', href: '/privacy-policy' },
    { id: 'conduct', label: 'Code of Conduct', href: '/code-of-conduct' },
  ];

  return (
      <div className="min-h-screen latte:bg-latte-base mocha:bg-mocha-base">
        {/* Header with Title */}
        <div className="latte:bg-latte-mantle mocha:bg-mocha-mantle py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold latte:text-latte-text mocha:text-mocha-text">
              Privacy Policy
            </h1>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="latte:bg-latte-surface0 mocha:bg-mocha-surface0 border-b latte:border-latte-overlay0 mocha:border-mocha-overlay0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => (
                  <a
                      key={tab.id}
                      href={tab.href}
                      className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                          activeTab === tab.id
                              ? "latte:border-latte-lavender mocha:border-mocha-lavender latte:text-latte-lavender mocha:text-mocha-lavender"
                              : "border-transparent latte:text-latte-subtext0 mocha:text-mocha-subtext0 latte:hover:text-latte-text mocha:hover:text-mocha-text latte:hover:border-latte-overlay0 mocha:hover:border-mocha-overlay0"
                      }`}
                      onClick={(e) => {
                        if (tab.id === "privacy") {
                          e.preventDefault(); // stay on current page
                          setActiveTab(tab.id);
                        }
                      }}
                  >
                    {tab.label}
                  </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Scope Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              Scope of This Notice
            </h2>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
              This Privacy Statement is intended to describe Luma Engine's privacy practices and provide
              information about the choices you have regarding the ways in which information collected by Luma
              Engine is used and disclosed. Luma Engine is referred to in this document as "Luma".
            </p>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
              It covers both online platforms of the Luma project and the use of the Luma Engine application.
            </p>
          </section>

          {/* Commitment to Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              Our Commitment to Privacy
            </h2>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
              Your privacy is important to Luma. To better protect your privacy and to comply with various laws
              and regulations, we have provided this Statement explaining our information practices and the
              choices you can make about the way your personal information is collected, used and disclosed. To
              make this Statement easy to find, we have made it available on our{' '}
              <a href="/" className="latte:text-latte-lavender mocha:text-mocha-lavender hover:underline">
                homepage
              </a>{' '}
              and at many of the locations where personally-identifiable information may be requested.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              The Information We Collect
            </h2>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
              This Privacy Statement applies to all information collected by or submitted to Luma, including
              personal data. "Personal data" is data that can be used to identify an individual.
            </p>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
              Luma collects personal data when:
            </p>
            <ul className="space-y-3 latte:text-latte-subtext1 mocha:text-mocha-subtext1 list-disc pl-6">
              <li>you visit the Luma web site;</li>
              <li>you access the Asset Library in the Luma editor application to browse or download assets;</li>
              <li>you sign up as a Luma Patreon or otherwise donate to Luma;</li>
              <li>you sign up and log in to an account on Luma's community platforms, and use it to participate in discussions;</li>
              <li>you participate in surveys or evaluations;</li>
              <li>you submit questions or comments to us.</li>
            </ul>
          </section>

          {/* Using Your Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              Using (Processing) Your Personal Data
            </h2>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
              Luma uses the personal data you provide to:
            </p>
            <ul className="space-y-3 latte:text-latte-subtext1 mocha:text-mocha-subtext1 list-disc pl-6">
              <li>create and maintain your accounts;</li>
              <li>identify and authenticate you;</li>
              <li>attribute data and content you produce directly and indirectly in our public-facing services;</li>
              <li>answer your questions;</li>
              <li>send you information;</li>
              <li>for research activities, including the production of statistical reports (such aggregated information is not used to contact the subjects of the report);</li>
              <li>send you surveys;</li>
              <li>maintain our servers.</li>
            </ul>
          </section>

          {/* Sharing Your Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              Sharing Your Personal Data
            </h2>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
              Unless you consent, Luma will never process or share the personal data you provide to us except as
              described below.
            </p>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
              Luma may share your personal data with third parties under any of the following circumstances:
            </p>
            <ul className="space-y-3 latte:text-latte-subtext1 mocha:text-mocha-subtext1 list-disc pl-6">
              <li>To attribute your contributions to source repositories, forums, and community platforms.</li>
              <li>
                As required to provide service, and for e-mail housing (as a consequence of uses already
                described in this Privacy Statement). It is in Luma's legitimate business interest to provide all
                users an accurate record of data and content provided by Luma's services, and to maintain the
                integrity of that data and content for historical, scientific, and research purposes.
              </li>
              <li>As required by law (such as responding to a valid subpoena, warrant, audit, or agency action, or to prevent fraud).</li>
              <li>
                For research activities, including the production of statistical reports (such aggregated
                information is used to describe our services and is not used to contact the subjects of the report).
              </li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              Cookies and Other Browser Information
            </h2>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
              Luma's online services automatically capture IP addresses. We use IP addresses to help diagnose
              problems with our servers, to administer our website, and to help ensure the security of your
              interaction with our services.
            </p>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
              As part of offering and providing customizable and personalized services, Luma uses cookies to
              store and sometimes track information about you. A cookie is a small amount of data that is sent to
              your browser from a Web server and stored on your computer's hard drive. All sections of
              lumaengine.org where you are prompted to log in or that are customizable require your browser to
              accept cookies.
            </p>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
              If you do not want your personal information to be stored by cookies, you can configure your
              browser so that it always rejects these cookies or asks you each time if you accept them or not.
              However, you must understand that the use of cookies may be necessary to provide certain services,
              and choosing to reject cookies will reduce the performance and functionality of the site.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              Our Commitment to Data Security
            </h2>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
              Luma trains its administrators on our privacy policy guidelines and makes our privacy policy
              available to our partners. Our website uses Secure Socket Layer (SSL) technology, which encrypts
              your personal data when you send your personal information on our website. In addition, Luma and
              its partners enter into confidentiality agreements which require that care and precautions be taken
              to prevent loss, misuse, or disclosure of your personal data.
            </p>
          </section>

          {/* Public Forums */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              Public Forums Reminder
            </h2>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
              Luma often makes chat rooms, forums, and other platforms available to the public. Please remember
              that any information that is disclosed in these areas becomes public information. Exercise caution
              when deciding to disclose your personal information. Although we value individual ideas and
              encourage free expression, Luma reserves the right to take necessary action to preserve the
              integrity of these areas, such as removing any posting that is vulgar or inappropriate.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              Our Commitment to Children's Online Privacy
            </h2>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
              Out of special concern for children's privacy, Luma does not knowingly accept online personal
              information from children under the age of 13. Luma does not knowingly allow children under the age
              of 13 to become registered members of our sites. Luma does not knowingly collect or solicit personal
              information about children under 13.
            </p>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
              In the event that Luma ever decides to expand its intended site audience to include children under
              the age of 13, those specific web pages will, in accordance with the requirements of the Children's
              Online Privacy Protection Act (COPPA), be clearly identified and provide an explicit privacy notice
              addressed to children under 13. In addition, Luma will provide an appropriate mechanism to obtain
              parental approval, allow parents to subsequently make changes to or request removal of their
              children's personal information, and provide access to any other information as required by law.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              How to Access, Modify or Update Your Information
            </h2>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
              Luma gives you the ability to access, modify or update your personal data at any time. On sites
              where you can create accounts, you may log in and make changes to your login information, your
              contact information, your general preferences and your personalization settings. If necessary, you
              may also contact us and describe the changes you want made to the personal data you have previously
              provided by mailing{' '}
              <a href="mailto:privacy@lumaengine.com" className="latte:text-latte-lavender mocha:text-mocha-lavender hover:underline">
                privacy@lumaengine.com
              </a>
              .
            </p>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
              If you wish to remove your personal data from Luma, you may contact us at{' '}
              <a href="mailto:privacy@lumaengine.com" className="latte:text-latte-lavender mocha:text-mocha-lavender hover:underline">
                privacy@lumaengine.com
              </a>{' '}
              and request that we remove this information from the Luma System.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              How to Contact Us
            </h2>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
              If you have any questions about any of these practices or Luma's use of your personal information,
              please feel free to contact us by email at:
            </p>
            <p className="latte:text-latte-lavender mocha:text-mocha-lavender mb-4">
              <a href="mailto:privacy@lumaengine.com" className="hover:underline">
                privacy@lumaengine.com
              </a>
            </p>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
              Luma will work with you to resolve any concerns you may have about this Statement.
            </p>
          </section>

          {/* Changes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              Changes to this Privacy Statement
            </h2>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
              Luma reserves the right to change this policy from time to time. If we do make changes, the revised
              Privacy Statement will be posted on this site. A notice will be posted on our homepage for 30 days
              whenever this privacy statement is changed in a material way.
            </p>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
              This Privacy Statement was last amended on {new Date().toISOString().split('T')[0]}.
            </p>
          </section>

          {/* Attribution */}
          <section>
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              Attribution and License
            </h2>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
              This Privacy Policy is licensed under Attribution-ShareAlike 4.0 International (CC BY-SA 4.0). It is
              a derivative work of:
            </p>
            <ul className="space-y-2 latte:text-latte-subtext1 mocha:text-mocha-subtext1 list-disc pl-6">
              <li>
                Software Freedom Conservancy's Privacy Policy, used under Attribute-Share Alike 4.0.{' '}
                <a href="https://sfconservancy.org/privacy-policy" className="latte:text-latte-lavender mocha:text-mocha-lavender hover:underline">
                  https://sfconservancy.org/privacy-policy
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
  );
};

export default PrivacyPolicy;