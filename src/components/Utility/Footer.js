"use client";
import { useState } from "react";

/**
 * Stable Social Link component with zero movement and a soft glow on hover.
 */
const SocialLink = ({ href, imageAlt, imageSrc, whiteImageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block no-underline"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ 
        width: "140px", 
        height: "44px", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        // Container has no transition or transform
      }}>
        <img
          src={isHovered && whiteImageSrc ? whiteImageSrc : imageSrc}
          alt={imageAlt}
          suppressHydrationWarning
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            // Size is constant; only filter and opacity change
            transition: "filter 0.3s ease, opacity 0.3s ease",
            filter: isHovered ? "drop-shadow(0 0 10px rgba(0, 0, 0, 0.15))" : "none",
            opacity: isHovered ? 0.95 : 1,
            cursor: "pointer",
            transform: "none", // Explicitly disable any transforms
          }}
        />
      </div>
    </a>
  );
};

/**
 * Stable Logo component with constant size and golden glow.
 */
const LogoImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="absolute right-[30px] flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        height: "80px",
        width: "350px", // Static width container
      }}
    >
      <img
        src={isHovered ? "/goldengdg.png" : "/whitegdgc.png"}
        alt="GDGC Logo"
        suppressHydrationWarning
        style={{
          height: "100%",
          width: "auto",
          maxWidth: "100%",
          cursor: "pointer",
          // Only filter transitions
          transition: "filter 0.3s ease",
          filter: isHovered ? "drop-shadow(0 0 12px rgba(255, 212, 39, 0.45))" : "none",
          objectFit: "contain",
          transform: "none", // Explicitly disable any transforms
        }}
      />
    </div>
  );
};

const Footer = () => {
  return (
    <>
      {/* ------------------------------------------------ */}
      {/* DESKTOP FOOTER                                   */}
      {/* ------------------------------------------------ */}
      <footer className="hidden md:flex justify-center w-full py-10 bg-transparent relative z-30">
        <div className="container m-auto px-4 flex justify-center">
          
          <div
            className="border-2 border-black rounded-[62px] bg-white relative flex items-center justify-center shadow-lg"
            style={{
              width: "1250px",
              height: "180px",
              maxWidth: "100%",
              flexShrink: 0,
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
            <div style={{ width: "80px", flexShrink: 0 }}>
              <img
                src="/gdgfooter.png"
                alt="Vector"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right Section - Logo */}
            <LogoImage />
          </div>
        </div>
      </footer>

      {/* ------------------------------------------------ */}
      {/* MOBILE FOOTER                                    */}
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
          backgroundColor: "white"
        }}>
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
          <img
            src="/gdgfooter.png"
            alt="Vector"
            style={{ width: "60px", height: "auto" }}
          />
          <div style={{ width: "280px", height: "auto" }}>
            <img
              src="/whitegdgc.png"
              alt="GDGC Logo"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;