"use client";
import { UserRegistrationPaymentProvider } from "@/context/RegistrationPaymentContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import UserRegistration from "../Razorpay/UserRegistration";

const FooterHackON = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <UserRegistrationPaymentProvider>
    <footer className="w-full bg-black py-12">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4">

        {/* Registration Modal */}
        {showRegistration && (
          <UserRegistration onClose={() => setShowRegistration(false)} />
        )}

        {/* Registration Closed Box */}
        <div className="relative w-full max-w-xl bg-transparent border-none p-0">
          {/* Outer Box */}
          <Image
            src="/register-box.svg"
            alt="Register Box"
            width={800}
            height={300}
            className="w-full h-auto"
          />

          {/* Registration Closed Text */}
          <div
            className="
              absolute 
              bottom-[8%] sm:bottom-[10%] md:bottom-[14%]
              left-1/2 
              -translate-x-1/2 
              w-full
              flex
              justify-center
              items-center
            "
          >
            <span className="text-white text-base sm:text-xl md:text-2xl font-bold bg-black/50 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full border border-white/30 backdrop-blur-sm">
              Registration Closed
            </span>
          </div>
        </div>





        {/* Social Media Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {socialLinks.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              className=" group flex items-center gap-2 rounded-full 
border border-white/40 
px-4 py-2 
text-white text-xs sm:text-sm 
transition-all duration-200

hover:bg-yellow-100 
hover:border-yellow-500 
hover:text-black"
            >
              <Image
  src={item.icon}
  alt={item.label}
  width={16}
  height={16}
  className="
    transition 
    group-hover:brightness-0
  "
/>

              <span className="underline">{item.label}</span>
            </Link>
          ))}
        </div>


        {/* GDG Logo Section - Shifted Left but Large */}

      </div>

              <div className="w-full flex items-center mt-10">
  {/* Left Line */}
  <div className="flex-[0.15] h-[1.5px] bg-white/80"></div>

  {/* Logo */}
  <div className="px-4 md:px-6 shrink-0">
    <Image
      src="/Footer69.png"
      alt="Google Developer Group On Campus GCOEN"
      width={700}
      height={120}
      className="w-[220px] sm:w-[280px] md:w-[360px] lg:w-[420px] h-auto object-contain"
    />
  </div>

  {/* Right Line */}
  <div className="flex-1 h-[1.5px] bg-white/80"></div>
</div>
    </footer>
    </UserRegistrationPaymentProvider>
  );
};

export default FooterHackON;

const socialLinks = [
  { icon: "/instagram.svg", link: "https://www.instagram.com/gdgcgcoen/", label: "Instagram" },
  { icon: "/whatsapp.svg", link: "https://chat.whatsapp.com/DTW7i4taVZ0GPs8KZgYmGu?mode=gi_t", label: "Whatsapp" },
  { icon: "/linkedin.svg", link: "https://www.linkedin.com/company/gdgoncampus-gcoen/", label: "LinkedIn" },
  { icon: "/x.svg", link: "https://x.com/GDGCGcoen", label: "X.com" },
  { icon: "/youtube.svg", link: "http://www.youtube.com/@gdscgcoen3822", label: "YouTube" },
];

