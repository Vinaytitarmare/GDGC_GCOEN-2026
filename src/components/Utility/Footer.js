"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SocialLink = ({ href, imageAlt, imageSrc, whiteImageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getImageSrc = () => {
    if (isHovered && whiteImageSrc) {
      return whiteImageSrc;
    }
    return imageSrc;
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={getImageSrc()}
        alt={imageAlt}
        suppressHydrationWarning
        style={{
          width: "140px",
          height: "44px",
          opacity: isHovered ? 0.95 : 1,
          transform: isHovered ? "scale(1.02)" : "scale(1)",
          transition: "all 0.3s ease",
          cursor: "pointer",
        }}
      />
    </a>
  );
};

const LogoImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src={isHovered ? "/goldengdg.png" : "/whitegdgc.png"}
      alt="GDGC Logo"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      suppressHydrationWarning
      style={{
        position: "absolute",
        right: "30px", // Adjusted slightly for better spacing
        width: "auto",
        height: "80px", // Fixed height to prevent distortion
        maxWidth: "400px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        objectFit: "contain"
      }}
    />
  );
};

const Footer = () => {
  return (
    <>
      {/* ------------------------------------------------ */}
      {/* DESKTOP FOOTER (Fixed)                           */}
      {/* ------------------------------------------------ */}
      <footer className="hidden md:flex justify-center w-full py-10 bg-transparent relative z-30">
        <div className="container m-auto px-4 flex justify-center">
          
          {/* The White Pill Box */}
          <div
            className="border-2 border-black rounded-[62px] bg-white relative flex items-center justify-center shadow-lg"
            style={{
              width: "1250px",
              height: "180px",
              maxWidth: "100%",
            }}
          >
            {/* Left Section - Social Icons */}
            <div
              style={{
                position: "absolute",
                left: "40px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {/* Top Row */}
              <div className="flex gap-3">
                <SocialLink
                  href="https://www.instagram.com/gdgcgcoen/"
                  imageAlt="Instagram"
                  imageSrc="/insta.png"
                  whiteImageSrc="/whiteinsta.png"
                />
                <SocialLink
                  href="https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ"
                  imageAlt="WhatsApp"
                  imageSrc="/whatsapp.png"
                  whiteImageSrc="/whitewhatsapp.png"
                />
                <SocialLink
                  href="https://www.linkedin.com/company/gdgoncampus-gcoen/"
                  imageAlt="LinkedIn"
                  imageSrc="/linkedin.png"
                  whiteImageSrc="/whitelinkedin.png"
                />
              </div>
              {/* Bottom Row */}
              <div className="flex gap-3">
                <SocialLink
                  href="https://x.com/GDGCGcoen"
                  imageAlt="X"
                  imageSrc="/x.png"
                  whiteImageSrc="/whiteX.png"
                />
                <SocialLink
                  href="https://www.youtube.com/c/gdscgcoen3822"
                  imageAlt="YouTube"
                  imageSrc="/youtube.png"
                  whiteImageSrc="/whiteyoutube.png"
                />
              </div>
            </div>

            {/* Center Graphic */}
            <img
              src="/gdgfooter.png"
              alt="Vector"
              className="object-contain"
              style={{
                width: "80px",
                height: "auto",
              }}
            />

            {/* Right Section - Logo */}
            <LogoImage />
          </div>
        </div>
      </footer>

      {/* ------------------------------------------------ */}
      {/* MOBILE FOOTER (Unchanged)                        */}
      {/* ------------------------------------------------ */}
      <footer className="block md:hidden bg-transparent px-4 py-8 relative z-30">
        <div style={{
          border: "2px solid #000000",
          borderRadius: "20px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          backgroundColor: "white" // Ensure white background on mobile too
        }}>
          {/* Social Icons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
              <SocialLink
                href="https://www.instagram.com/gdgcgcoen/"
                imageAlt="Instagram"
                imageSrc="/insta.png"
                whiteImageSrc="/whiteinsta.png"
              />
              <SocialLink
                href="https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ"
                imageAlt="WhatsApp"
                imageSrc="/whatsapp.png"
                whiteImageSrc="/whitewhatsapp.png"
              />
              <SocialLink
                href="https://www.linkedin.com/company/gdgoncampus-gcoen/"
                imageAlt="LinkedIn"
                imageSrc="/linkedin.png"
                whiteImageSrc="/whitelinkedin.png"
              />
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
              <SocialLink
                href="https://x.com/GDGCGcoen"
                imageAlt="X"
                imageSrc="/x.png"
                whiteImageSrc="/whiteX.png"
              />
              <SocialLink
                href="https://www.youtube.com/c/gdscgcoen3822"
                imageAlt="YouTube"
                imageSrc="/youtube.png"
                whiteImageSrc="/whiteyoutube.png"
              />
            </div>
          </div>

          {/* Center Logo */}
          <img
            src="/gdgfooter.png"
            alt="Vector"
            style={{
              width: "60px",
              height: "auto",
            }}
          />

          {/* Logo - Adjusted for Mobile */}
          <img
            src="/whitegdgc.png"
            alt="GDGC Logo"
            style={{
              width: "280px",
              height: "auto",
            }}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;