import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] text-[#A1A1A1] pt-12 pb-6 px-6 md:px-20 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-[#FFD700] mb-2">Cyber Halo</h2>
          <p className="text-[#F4F4F4]">AI-powered shield for safer digital spaces.</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-[#FFD700] font-semibold mb-2">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="#features" className="hover:text-[#FFD700]">Features</a></li>
            <li><a href="#demo" className="hover:text-[#FFD700]">Live Demo</a></li>
            <li><a href="#about" className="hover:text-[#FFD700]">About</a></li>
            <li><a href="#contact" className="hover:text-[#FFD700]">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-[#FFD700] font-semibold mb-2">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#privacy" className="hover:text-[#FFD700]">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-[#FFD700]">Terms of Service</a></li>
            <li><a href="#help" className="hover:text-[#FFD700]">Help Center</a></li>
            <li><a href="#blog" className="hover:text-[#FFD700]">Blog</a></li>
          </ul>
        </div>

        {/* Newsletter / Contact */}
        <div>
          <h3 className="text-[#FFD700] font-semibold mb-2">Stay Updated</h3>
          <p className="mb-4 text-sm">Subscribe to get updates on cyber safety, tools, and AI insights.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded bg-[#2C2C2E] text-white focus:outline-none border border-[#3A3A3C]"
            />
            <button
              type="submit"
              className="bg-[#FFD700] text-[#0F0F0F] font-semibold py-2 rounded hover:bg-[#D4AF37] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-[#3A3A3C] pt-4 text-center text-sm text-[#A1A1A1]">
        © {new Date().getFullYear()} Cyber Halo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
