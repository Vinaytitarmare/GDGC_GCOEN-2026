"use client";
import Image from "next/image";
// Importing both person images from src
import PersonImage from "@/Person.png"; 
import PersonImageMobile from "@/person2.png"; // Ensure person2.png exists in your src folder

const LandingPage = () => {
  return (
    <div className="w-full bg-white relative z-10">
      <div className="container mx-auto px-5 pt-32 pb-10 flex flex-col items-center relative">
        
        {/* 4. COLLEGE NAME IMAGE (Responsive) */}
        <div className="relative w-[90%] md:w-[60%] lg:w-[50%] h-auto mt-[-110px] md:mt-[-150px] mb-12 flex justify-center">
            {/* Desktop View: hero.png */}
            <Image
                src="/svg/hero.png"
                alt="Government College of Engineering Nagpur"
                width={800}
                height={100}
                className="hidden md:block w-full h-auto object-contain"
                priority
            />
            {/* Mobile View: image2.png */}
            <Image
                src="/svg/image2.png"
                alt="Government College of Engineering Nagpur Mobile"
                width={800}
                height={100}
                className="block md:hidden w-full h-auto object-contain"
                priority
            />
        </div>

        {/* 5. PERSON IMAGE (Responsive) */}
        <div className="w-full flex justify-center relative z-20">
          {/* Desktop View: Person.png */}
          <Image 
            src={PersonImage} 
            alt="Community Person" 
            width={1000}
            height={600}
            className="hidden md:block w-full h-auto max-w-[1000px] object-contain drop-shadow-xl"
            priority 
          />
          {/* Mobile View: person2.png */}
          <Image 
            src={PersonImageMobile} 
            alt="Community Person Mobile" 
            width={600}
            height={400}
            className="block md:hidden w-full h-auto max-w-[1000px] object-contain drop-shadow-xl"
            priority 
          />
        </div>

        {/* DECORATIVE ELEMENTS */}
        <img
          src="/polygon4.png"
          alt=""
          className="hidden md:block absolute top-1/2 left-4 md:left-2 lg:left-10 w-10 md:w-[40px] lg:w-[50px] h-auto -z-10 opacity-100"
        />
        <img
          src="/polygon1.png"
          alt=""
          className="hidden md:block absolute top-1/4 right-4 md:right-2 lg:right-10 w-20 md:w-[80px] lg:w-[100px] h-auto -z-10 opacity-100"
        />

      </div>
    </div>
  );
};

export default LandingPage;