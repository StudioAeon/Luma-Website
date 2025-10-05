import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CodeOfConduct = () => {
  const location = useLocation();

  const getActiveTab = () => {
    if (location.pathname === '/license') return 'license';
    if (location.pathname === '/privacy-policy') return 'privacy';
    if (location.pathname === '/code-of-conduct') return 'conduct';
    return 'conduct';
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
              Code of Conduct
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
          {/* Introduction */}
          <section className="mb-12">
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
              The Luma project is an international community open to everyone without discrimination. We want
              this community to be a safe and welcoming place for both newcomers and current members.
              Everyone should feel comfortable and accepted regardless of their personal background and
              affiliation to the Luma project.
            </p>
          </section>

          {/* Philosophy Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              Philosophy
            </h2>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
              In the Luma community, participants from all over the world come together to create a free and
              open source game engine. This is made possible by the support, hard work, and enthusiasm of
              thousands of people who collaborate towards the common goal of creating great technology and
              games. Cooperation at such a scale requires common guidelines to ensure a positive and inspiring
              atmosphere in the community.
            </p>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
              This is why we have this Code of Conduct: it explains the type of community we want to have. The
              rules below are not applied to all interactions with a simple matching algorithm. Human interactions
              happen in context and are complex. Perceived violations are evaluated by real humans who will try
              to interpret the interactions and the rules with kindness. Accordingly, there is no need to
              hypothesize on how these rules would affect normal interactions. Be reasonable, the Code of
              Conduct team surely will be as well.
            </p>
          </section>

          {/* Application Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              Application
            </h2>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1">
              This Code of Conduct applies to all users and contributors who engage with the Luma project and
              its community platforms, both online and at Luma-related events.
            </p>
          </section>

          {/* Expectations Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              Expectations
            </h2>
            <ul className="space-y-4 latte:text-latte-subtext1 mocha:text-mocha-subtext1">
              <li>
                <strong className="latte:text-latte-text mocha:text-mocha-text">Politeness is expected at all times.</strong> Be kind and courteous.
              </li>
              <li>
                <strong className="latte:text-latte-text mocha:text-mocha-text">Always assume positive intent from others.</strong> Be aware that differences in culture and English
                proficiency make written communication more difficult than face-to-face communication and
                that your interpretation of messages may not be the one the author intended. Conversely, if
                someone asks you to rephrase something you said, be ready to do so without feeling judged.
              </li>
              <li>
                <strong className="latte:text-latte-text mocha:text-mocha-text">Feedback is always welcome</strong> but keep your criticism constructive. We encourage you to open
                discussions, proposals, issues, and bug reports. Use the community platforms to discuss
                improvements, not to vent out frustration. Similarly, when other users offer you feedback
                please accept it gracefully.
              </li>
            </ul>
          </section>

          {/* Restricted Conduct Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              Restricted conduct
            </h2>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
              Participating in restricted conduct will lead to a warning from community moderators and/or the
              Code of Conduct team and may lead to exclusion from the community in the form of a ban from one
              or all platforms.
            </p>
            <ul className="space-y-4 latte:text-latte-subtext1 mocha:text-mocha-subtext1 list-disc pl-6">
              <li>
                The Luma project is committed to providing a friendly and safe environment for everyone,
                regardless of level of experience, gender identity and expression, sexual orientation, disability,
                physical appearance, body size, race, ethnicity, language proficiency, age, political orientation,
                nationality, religion, or other similar characteristics. We do not tolerate harassment or
                discrimination of participants in any form.
              </li>
              <li>
                In particular, we strive to be welcoming to all industry minorities and to ensure that they can
                take a more active role in the community and the project. Targeted harassment of minorities is
                unacceptable.
              </li>
              <li>
                As a community developed project, we strive for consensus among contributors before moving
                forward with a proposed feature. If there is not enough support for your ideas, please don't
                continue insisting or trying to force others into supporting your point. Features are not accepted
                through a voting process, so piling onto a contentious feature proposal is not acceptable.
              </li>
              <li>
                Aggressive or offensive behavior is not acceptable.
              </li>
              <li>
                You will be excluded from participating in the community if you insult, demean, harass,
                intentionally make others uncomfortable by any means, or participate in any other hateful
                conduct, either publicly or privately.
              </li>
              <li>
                Likewise, any spamming, trolling, flaming, baiting, or other attention-stealing behavior is not
                welcome and will result in exclusion from the community.
              </li>
              <li>
                Any form of retaliation against a participant who contacts the Code of Conduct team is
                completely unacceptable, regardless of the outcome of the complaint. Any such behavior will
                result in exclusion from the community.
              </li>
              <li>
                For certainty, any conduct which could reasonably be considered inappropriate in a professional
                setting is not acceptable.
              </li>
            </ul>
          </section>

          {/* Reporting Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              Reporting a breach
            </h2>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
              If you witness or are involved in an interaction with another community member that you think may
              violate this Code of Conduct, please contact the Luma Code of Conduct team.
            </p>
            <p className="latte:text-latte-subtext1 mocha:text-mocha-subtext1 mb-4">
              The Luma team recognizes that it can be difficult to come forward in cases of a violation of the
              Code of Conduct. To make it easier to report violations, we provide a single point of contact via
              email at:{' '}
              <a href="mailto:conduct@lumaengine.com" className="latte:text-latte-lavender mocha:text-mocha-lavender hover:underline">
                conduct@lumaengine.com
              </a>
              . If you are more comfortable reaching out to a single person, you are also welcome to contact one
              or more members of the team using their personal emails, or via direct messaging on community
              platforms where they are present.
            </p>
          </section>

          {/* Code of Conduct Team */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold latte:text-latte-text mocha:text-mocha-text mb-6">
              Code of Conduct team
            </h2>
            <ul className="space-y-3 latte:text-latte-subtext1 mocha:text-mocha-subtext1">
              <li>
                <strong className="latte:text-latte-text mocha:text-mocha-text">Astrix</strong>,{' '}
                <a href="mailto:astrix@lumaengine.com" className="latte:text-latte-lavender mocha:text-mocha-lavender hover:underline">
                  astrix@lumaengine.com
                </a>
                <ul className="ml-6 mt-1 space-y-1 text-sm">
                  <li>GitHub: <span className="latte:text-latte-text mocha:text-mocha-text">@astrix</span></li>
                  <li>Discord: <span className="latte:text-latte-text mocha:text-mocha-text">@astrix</span></li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Disclaimer */}
          <section>
            <p className="text-sm latte:text-latte-subtext0 mocha:text-mocha-subtext0 italic">
              This Code of Conduct is adapted from established open source community guidelines and reflects the
              values of the Luma Engine project.
            </p>
          </section>
        </div>
      </div>
  );
};

export default CodeOfConduct;