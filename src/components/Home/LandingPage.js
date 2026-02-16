"use client";
import React from "react";
import Image from "next/image";
// Ensure these paths match your project structure exactly
import GDGLogo from "@/logo1.png"; 
import PersonImage from "@/Person.png"; 

const LandingPage = () => {
  return (
    <div className="w-full bg-white relative z-10">
      {/* Removed 'minHeight: 2000px'. 
         Used Flexbox so height adjusts automatically to content.
      */}
      <div className="container mx-auto px-5 pt-32 pb-10 flex flex-col items-center relative">
        
        {/* 1. LOGO */}
        <div className="mb-2 relative w-[120px] h-[80px] md:w-[195px] md:h-[105px]">
           <Image 
             src={GDGLogo} 
             alt="GDG Logo" 
             fill
             className="object-contain"
             priority
           />
        </div>

        {/* 2. MAIN HEADING */}
        <h1 className="text-center font-['Poppins'] font-semibold text-4xl md:text-[89px] leading-tight text-[#F9AB00] drop-shadow-sm mb-4"
            style={{ WebkitTextStroke: "1px #000000" }}>
          Google Developer Group
        </h1>

        {/* 3. SUB HEADING (On Campus) */}
        <h2 className="text-center font-['Poppins'] font-semibold text-3xl md:text-[89px] leading-tight text-[#F9AB00] mb-6"
            style={{ WebkitTextStroke: "1px #000000" }}>
          On Campus
        </h2>

        {/* 4. COLLEGE NAME */}
        <p className="text-center font-['Poppins'] font-normal text-lg md:text-[40px] leading-normal text-black max-w-4xl mb-12">
          GOVERNMENT COLLEGE OF ENGINEERING NAGPUR
        </p>

        {/* 5. PERSON IMAGE (Replaces the old box and main.png) */}
        {/* This div dictates the height of this section naturally */}
        <div className="w-full flex justify-center relative z-20">
          <Image 
            src={PersonImage} 
            alt="Community Person" 
            width={1000} // Adjust based on your actual image aspect ratio
            height={600}
            className="w-full h-auto max-w-[1000px] object-contain drop-shadow-xl"
            priority 
          />
        </div>

        {/* DECORATIVE ELEMENTS (Polygons) - Optional */}
        {/* You can keep these absolute because they float around the main content */}
        <img
          src="/polygon4.png"
          alt=""
          className="absolute top-1/2 left-4 md:left-20 w-10 md:w-[60px] h-auto -z-10 opacity-50 md:opacity-100"
        />
        <img
          src="/polygon1.png"
          alt=""
          className="absolute top-1/4 right-4 md:right-20 w-20 md:w-[134px] h-auto -z-10 opacity-50 md:opacity-100"
        />

      </div>
    </div>
  );
};

export default LandingPage;