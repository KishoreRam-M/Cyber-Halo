import React from 'react';

const TrustedBy = () => {
  return (
    <section className="w-full bg-[#0F0F0F] py-16 px-6 md:px-20 text-[#F4F4F4]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-6">Trusted by Top Tech... and Their Interns</h2>
        <p className="text-[#A1A1A1] max-w-2xl mx-auto mb-12">
          From massive corporations to caffeine-fueled startups, Cyber Halo is the silent guardian behind digital decency. Even the big names (and fake names) use it — or fear it.
        </p>

        {/* Parody Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-sm font-semibold">
          <div className="bg-[#2C2C2E] p-4 rounded-lg border border-[#3A3A3C] hover:bg-[#1C1C1E] transition">
             <span className="text-[#FFD700]">Pear Inc.</span><br />
            <span className="text-[#A1A1A1]">Because fruit = innovation</span>
          </div>
          <div className="bg-[#2C2C2E] p-4 rounded-lg border border-[#3A3A3C] hover:bg-[#1C1C1E] transition">
             <span className="text-[#FFD700]">Facebored</span><br />
            <span className="text-[#A1A1A1]">Where Gen X yells into the void</span>
          </div>
          <div className="bg-[#2C2C2E] p-4 rounded-lg border border-[#3A3A3C] hover:bg-[#1C1C1E] transition">
             <span className="text-[#FFD700]">Netflux</span><br />
            <span className="text-[#A1A1A1]">Streaming breakups & boredom</span>
          </div>
          <div className="bg-[#2C2C2E] p-4 rounded-lg border border-[#3A3A3C] hover:bg-[#1C1C1E] transition">
             <span className="text-[#FFD700]">Amazone</span><br />
            <span className="text-[#A1A1A1]">Faster than your regrets</span>
          </div>
          <div className="bg-[#2C2C2E] p-4 rounded-lg border border-[#3A3A3C] hover:bg-[#1C1C1E] transition">
             <span className="text-[#FFD700]">Googlag</span><br />
            <span className="text-[#A1A1A1]">Knows your secrets (and pizza order)</span>
          </div>
          <div className="bg-[#2C2C2E] p-4 rounded-lg border border-[#3A3A3C] hover:bg-[#1C1C1E] transition">
             <span className="text-[#FFD700]">MicroHard</span><br />
            <span className="text-[#A1A1A1]">Still updating... probably forever</span>
          </div>
        </div>

        <p className="mt-12 text-[#D4AF37] italic text-sm">
           Also loved by digital ninjas, meme moderators, and AI overlords who don’t sleep.
        </p>
      </div>
    </section>
  );
};

export default TrustedBy;
