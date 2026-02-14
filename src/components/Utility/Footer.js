"use client";
import DefaultBtn from "./DefaultBtn";
import { rethink_sans800 } from "@/Fonts/Rethink";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SocialLink = ({ href, imageAlt, imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

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
        src={imageSrc}
        alt={imageAlt}
        suppressHydrationWarning
        style={{
          width: "177px",
          height: "55px",
          opacity: isHovered ? 0.95 : 1,
          transform: isHovered ? "scale(1.02)" : "scale(1)",
          transition: "all 0.3s ease",
          cursor: "pointer",
        }}
      />
    </a>
  );
};

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-white" style={{ paddingTop: "600px" }}>
      <div className="container m-auto">
        {/* Frame 124 - Bottom Box */}
        <div className="flex justify-center py-8 px-5">
          <div
            className="border-2 border-black rounded-[62px] bg-white relative flex justify-center items-center"
            style={{
              width: "1540px",
              height: "221px",
              maxWidth: "95vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Left Section - Social Icons */}
            <div
              style={{
                position: "absolute",
                left: "29px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {/* Top Row - Instagram, WhatsApp, LinkedIn */}
              <div style={{ display: "flex", gap: "12px" }}>
                <SocialLink
                  href="https://www.instagram.com/gdgcgcoen/"
                  imageAlt="Instagram"
                  imageSrc="/insta.png"
                />
                <SocialLink
                  href="https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ"
                  imageAlt="WhatsApp"
                  imageSrc="/whatsapp.png"
                />
                <SocialLink
                  href="https://www.linkedin.com/company/gdgoncampus-gcoen/"
                  imageAlt="LinkedIn"
                  imageSrc="/linkedin.png"
                />
              </div>
              {/* Bottom Row - X, YouTube */}
              <div style={{ display: "flex", gap: "12px" }}>
                <SocialLink
                  href="https://x.com/GDGCGcoen"
                  imageAlt="X"
                  imageSrc="/x.png"
                />
                <SocialLink
                  href="https://www.youtube.com/c/gdscgcoen3822"
                  imageAlt="YouTube"
                  imageSrc="/youtube.png"
                />
              </div>
            </div>

            <img
              src="/gdgfooter.png"
              alt="Vector"
              style={{
                width: "96px",
                height: "52px",
              }}
            />
            <img
              src="/whitegdgc.png"
              alt="GDGC Logo"
              style={{
                position: "absolute",
                right: "29px",
                width: "601px",
                height: "128px",
              }}
            />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
