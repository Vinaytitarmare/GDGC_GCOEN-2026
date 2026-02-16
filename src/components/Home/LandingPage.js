"use client";
import Image from "next/image";
// Ensure these paths match your project structure exactly
import PersonImage from "@/Person.png";

const LandingPage = () => {
  return (
    <div className="w-full bg-white relative z-10">
      {/* Removed 'minHeight: 2000px'. 
         Used Flexbox so height adjusts automatically to content.
      */}
      <div className="container mx-auto px-5 pt-32 pb-10 flex flex-col items-center relative">
        
        {/* 1. LOGO */}
        {/* <div className="mb-2 relative w-[120px] h-[80px] md:w-[195px] md:h-[105px]">
           <Image 
             src={GDGLogo} 
             alt="GDG Logo" 
             fill
             className="object-contain"
             priority
           />
        </div> */}

        {/* 2. MAIN HEADING */}
        

        {/* 4. COLLEGE NAME IMAGE */}
        <div className="relative w-[90%] md:w-[60%] lg:w-[50%] h-auto mt-[-110px] md:mt-[-150px] mb-12 flex justify-center">
            <Image
                src="/svg/hero.png"
                alt="Government College of Engineering Nagpur"
                width={800}
                height={100}
                className="w-full h-auto object-contain"
                priority
            />
        </div>

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
          className="absolute top-1/2 left-4 md:left-2 lg:left-10 w-10 md:w-[40px] lg:w-[50px] h-auto -z-10 opacity-50 md:opacity-100"
        />
        <img
          src="/polygon1.png"
          alt=""
          className="absolute top-1/4 right-4 md:right-2 lg:right-10 w-20 md:w-[80px] lg:w-[100px] h-auto -z-10 opacity-50 md:opacity-100"
        />

      </div>
    </div>
  );
};

export default LandingPage;