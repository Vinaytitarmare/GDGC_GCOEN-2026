import { rethink_sans800 } from "@/Fonts/Rethink";
import Image from "next/image";
import Link from "next/link";

const UniversalCard = ({ 
  imageSrc, 
  title, 
  date, 
  location = "GCOEN",
  link = "#", 
  label = "Read more",
  type = "upcoming" // "upcoming" | "past" | "blog"
}) => {
  return (
    <Link href={link} className="block group h-full">
      {/* CONTAINER: Holds the stack */}
      <div className="relative w-full h-full min-h-[400px]">
        
        {/* 1. YELLOW BACKGROUND LAYER (The Rim) */}
        {/* Simplified: Sits behind the white card, offset slightly upwards */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#ffd427] border-2 border-black rounded-[30px] transform -translate-y-2 transition-transform duration-300 group-hover:-translate-y-3 z-0"></div>

        {/* 2. MAIN WHITE CARD (The Content) */}
        <div className="relative z-10 w-full h-full bg-white border-2 border-black rounded-[30px] overflow-hidden flex flex-col transition-transform duration-300 group-hover:-translate-y-1">
          
          {/* A. IMAGE SECTION (Top Half) */}
          <div className="w-full h-48 md:h-80 relative border-b-2 border-black bg-gray-50">
             {imageSrc ? (
               <Image 
                 src={imageSrc} 
                 alt={title} 
                 fill 
                 className="object-cover"
               />
             ) : (
               // Placeholder pattern
               <div className="w-full h-full opacity-10 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]"></div>
             )}
          </div>

          {/* B. CONTENT SECTION (Bottom Half) */}
          <div className="p-5 flex flex-col flex-grow justify-between gap-4">
            
            {/* Location (Row 1) */}
            <div className="flex items-center gap-2">
                <i className="uil uil-location-point text-base md:text-xl"></i>
                <span className={`text-base md:text-lg font-bold ${rethink_sans800.className}`}>{location}</span>
            </div>

            {/* Title (Row 2) - Optional based on design, but usually needed */}
            {title && (
                 <h3 className={`text-xl font-bold text-black line-clamp-2 leading-tight ${rethink_sans800.className}`}>
                 {title}
               </h3>
            )}
           

            {/* Footer: Action Button + Date */}
            <div className="flex items-center justify-between mt-auto pt-2">
              
              {/* Pill Button */}
              <div className="flex items-center gap-2 px-6 py-2 border-2 border-black rounded-full transition-colors group-hover:bg-black group-hover:text-white">
                <span className="text-sm font-bold whitespace-nowrap">
                  {label}
                </span>
                {/* Arrow Icon */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
                    <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Date with Calendar Icon */}
              {date && (
                <div className="flex items-center gap-2 text-black">
                  <i className="uil uil-calendar-alt text-xl"></i>
                  <span className="text-sm font-bold">
                    {new Date(date).toLocaleDateString('en-GB').replace(/\//g, '-')}
                  </span>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default UniversalCard;
