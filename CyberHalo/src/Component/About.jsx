import React from 'react';

const AboutSection = () => {
  return (
    <section className="w-full bg-[#0F0F0F] text-[#F4F4F4] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-4">About Cyber Halo</h2>
          <p className="text-[#A1A1A1] text-lg max-w-3xl mx-auto">
            At Cyber Halo, we're on a mission to create emotionally intelligent AI that defends digital communities from abuse, fear, and hate. We combine security, empathy, and innovation to safeguard online experiences.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-[#2C2C2E] p-6 rounded-2xl shadow-md border border-[#3A3A3C] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#FFD700] mb-2"> Our Mission</h3>
            <p className="text-[#A1A1A1]">
              To provide cutting-edge cyberbullying detection and prevention tools powered by real-time AI & NLP — helping schools, creators, and platforms build safer environments.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#2C2C2E] p-6 rounded-2xl shadow-md border border-[#3A3A3C] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#FFD700] mb-2"> Our Vision</h3>
            <p className="text-[#A1A1A1]">
              A digital world where technology proactively protects mental health, promotes empathy, and empowers users to take control of their online well-being.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="bg-[#2C2C2E] p-6 rounded-2xl shadow-md border border-[#3A3A3C] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#FFD700] mb-2"> Technology We Use</h3>
            <p className="text-[#A1A1A1] mb-2">
              • Natural Language Processing (NLP)<br />
              • Deep Learning & Transformers<br />
              • Real-Time WebSockets + Cloud Infra<br />
              • Role-Based Access Control (RBAC)
            </p>
          </div>

          {/* Community Impact */}
          <div className="bg-[#2C2C2E] p-6 rounded-2xl shadow-md border border-[#3A3A3C] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#FFD700] mb-2"> Emotional Intelligence + Safety</h3>
            <p className="text-[#A1A1A1]">
              We believe AI should do more than detect — it should care. Our models assess tone, emotional impact, and patterns to prevent harm before it spreads, while maintaining privacy and control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
