import React from "react";
import Link from "next/link";

const HackOnPrizes = () => {
  return (
    <section className="w-full relative py-16 px-4 bg-black overflow-hidden flex justify-center shrink-0 min-h-fit h-auto">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-yellow-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="w-full max-w-5xl flex flex-col gap-12 md:gap-16 relative z-10">
        
        {/* TOP SECTION: Prize Box & Rounds Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          
          {/* LEFT: Prize Pool Box */}
          <div className="border border-[#F9AB00] rounded-[32px] p-8 md:p-10 flex flex-col items-center justify-center bg-black min-w-[280px] shadow-[0_0_40px_rgba(249,171,0,0.15)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(249,171,0,0.6)] cursor-default">
            <h4 className="text-white text-3xl font-bold tracking-wide">
              Prize Pool
            </h4>
            <h2 
              className="text-[#F9AB00] text-7xl md:text-8xl font-black mt-1 transition-all duration-500"
              style={{ textShadow: "4px 4px 0px rgba(255,255,255,0.15)" }} 
            >
              20K
            </h2>
          </div>

          {/* RIGHT: HackOn Rounds Info */}
          <div className="flex flex-col text-center md:text-left text-white max-w-lg">
            <h3 className="text-[#F9AB00] text-2xl md:text-3xl font-medium mb-4">
              HackOn Rounds
            </h3>
            
            <div className="space-y-2 text-base md:text-lg mb-6">
              <p>
                <span className="font-bold">Round 1:</span> Online PPT Submission
              </p>
              <p>
                <span className="font-bold">Round 2:</span> 8-Hour Offline Hackathon
              </p>
              <p className="font-bold text-gray-300">
                (Selected Teams Only)
              </p>
            </div>

            <div className="text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/10 pt-4">
              Certificates | Mentorship & Networking | Goodies | Refreshments
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: Event Coordinators */}
       {/* BOTTOM SECTION: Event Coordinators */}
        <div className="flex flex-col items-center w-full mt-4 md:mt-8">
          {/* FIX: Scaled down text/tracking on mobile and added whitespace-nowrap */}
          <h3 className="text-gray-300 text-base sm:text-lg md:text-xl font-medium mb-8 uppercase tracking-wide md:tracking-widest text-center whitespace-nowrap">
            Event Coordinators
          </h3>
          
          <div className="flex flex-row justify-center gap-3 sm:gap-12 w-full px-2">
            
            {/* EC 1 */}
            {/* FIX 3: Added w-[48%] so it takes up almost half the phone screen, and text-sm so names fit */}
            <div className="flex flex-col items-center text-center bg-white/5 border border-white/10 px-2 py-4 sm:px-5 rounded-xl w-[48%] max-w-[200px] transition-colors hover:bg-white/10">
              <p className="text-white font-semibold text-sm sm:text-base leading-tight mb-1">Shreyash Ambhure</p>
              <Link href="tel:+918767607452" className="text-[#F9AB00] hover:underline text-xs sm:text-sm">
                +91 8767607452
              </Link>
            </div>

            {/* EC 2 */}
            <div className="flex flex-col items-center text-center bg-white/5 border border-white/10 px-2 py-4 sm:px-5 rounded-xl w-[48%] max-w-[200px] transition-colors hover:bg-white/10">
              <p className="text-white font-semibold text-sm sm:text-base leading-tight mb-1">Kartik Bissa</p>
              <Link href="tel:+918329284863" className="text-[#F9AB00] hover:underline text-xs sm:text-sm">
                +91 8329284863
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HackOnPrizes;