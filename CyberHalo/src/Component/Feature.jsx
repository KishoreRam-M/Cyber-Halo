import React from 'react';

const features = [
  {
    title: ' AI-Powered Bullying Detection',
    desc: 'Real-time analysis using NLP + deep learning to detect toxic behavior across social platforms.',
  },
  {
    title: ' User Authentication & Authorization',
    desc: 'Secure login with JWT-based tokens, role-based access for moderators, admins, and users.',
  },
  {
    title: ' Premium Dashboard Access',
    desc: 'Advanced moderation controls, user heatmaps, sentiment analytics & exportable reports.',
  },
  {
    title: ' Real-Time Alerts & Reports',
    desc: 'Immediate notifications on flagged content, auto-report to admins, and community flags.',
  },
  {
    title: ' End-to-End Encrypted Communication',
    desc: 'Messages and metadata fully encrypted using AES256 + zero-trust architecture.',
  },
  {
    title: ' Cross-Platform Compatibility',
    desc: 'Easily integrates with Instagram, Twitter, Reddit, Discord, YouTube & more.',
  },
  {
    title: ' Instant Ban & Mute Features',
    desc: 'Auto-mute or temporarily ban repeat offenders with mod override and analytics-based escalation.',
  },
  {
    title: ' Mobile First + Progressive Web App',
    desc: 'Built as a blazing-fast, mobile-optimized, installable web app for every device.',
  },
];

const Features = () => {
  return (
    <section className="w-full bg-[#0F0F0F] text-[#F4F4F4] py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">Platform Features</h2>
        <p className="text-[#A1A1A1] text-lg max-w-xl mx-auto">
          Everything you need to safeguard communities and empower digital citizens.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-[#2C2C2E] border border-[#3A3A3C] p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 hover:scale-[1.015]"
          >
            <h3 className="text-xl font-semibold text-[#FFD700] mb-2">{feature.title}</h3>
            <p className="text-[#A1A1A1]">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
