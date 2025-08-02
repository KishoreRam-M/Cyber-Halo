import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="w-full text-[#F4F4F4] py-16 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10"
      style={{ backgroundColor: '#0F0F0F' }} // Rich Black background
    >
      {/* Left Side */}
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFD700]">
          Cyber Halo — Your AI Shield for Safer Digital Spaces
        </h1>
        <h3 className="text-lg md:text-xl text-[#A1A1A1] mb-6">
          Empowering communities with intelligence, empathy, and protection.
        </h3>

        <div
          className="p-6 rounded-2xl shadow-lg"
          style={{ backgroundColor: '#1C1C1E' }} // Charcoal Gray
        >
          <h2 className="text-2xl font-semibold mb-2 text-[#FFD700]"> Cyber Halo</h2>
          <p className="mb-1 text-[#F4F4F4]">Advanced Cyberbullying Detection & Real-Time Prevention</p>
          <p className="mb-4 text-[#F4F4F4]">
            Protect your users, brand, and reputation with intelligent, always-on cyber abuse protection.
          </p>

          <div className="flex flex-wrap gap-3 mb-4">
            <span
              className="px-3 py-1 rounded-full text-sm text-[#0F0F0F] font-medium"
              style={{ backgroundColor: '#FFD700' }}
            >
              Real-Time AI + NLP Detection
            </span>
            <span
              className="px-3 py-1 rounded-full text-sm text-[#F4F4F4]"
              style={{ backgroundColor: '#2C2C2E' }}
            >
               Works Across Social Platforms
            </span>
            <span
              className="px-3 py-1 rounded-full text-sm text-[#F4F4F4]"
              style={{ backgroundColor: '#2C2C2E' }}
            >
               End-to-End Secure & Private
            </span>
          </div>

          <div className="flex gap-4">
            <button
              className="px-5 py-2 rounded-full font-semibold text-[#0F0F0F] shadow-md transition duration-300"
              style={{ backgroundColor: '#FFD700' }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#D4AF37')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#FFD700')}
            >
               Get Started
            </button>
            <button
              className="px-5 py-2 rounded-full font-semibold text-[#F4F4F4] bg-[#2C2C2E] hover:bg-[#3A3A3C] transition duration-300"
            >
               Watch Live Demo
            </button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex items-center justify-center">
        <div
          className="w-full rounded-xl shadow-2xl p-2"
          style={{ backgroundColor: '#1E1F2F' }} // Deep Navy
        >
          <video
            className="w-full h-auto outline-none bg-[#1E1F2F] rounded-xl"
            controls
            poster="thumbnail.jpg"
          >
  <source src="/assets/cb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
