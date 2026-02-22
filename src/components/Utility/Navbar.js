"use client";

import { useAuth } from "@/context/AuthContext";
import { poppins400 } from "@/Fonts/Poppins";
import { Calendar, Home, Mail, Rss, Users } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import AccountMenu from "../MyAccount/AccountMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [hoverGDGC, setHoverGDGC] = useState(false);
  const [hoverItem, setHoverItem] = useState(null);
  const { isLogin } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  // List of menu items and their routes
  const menuItems = [
    { name: "Home", path: "/", width: "md:w-[100px] lg:w-[140px] xl:w-[160px] 2xl:w-[197px]", imgURl: "/vector69.png", icon: Home },
    { name: "Events", path: "/Events", width: "md:w-[100px] lg:w-[140px] xl:w-[160px] 2xl:w-[197px]", imgURl: "/eventmobile.png", icon: Calendar },
    { name: "Blogs", path: "/Blogs", width: "md:w-[100px] lg:w-[140px] xl:w-[160px] 2xl:w-[197px]", imgURl: "/blogsmobile.png", icon: Rss },
    { name: "Teams", path: "/Teams", width: "md:w-[100px] lg:w-[140px] xl:w-[160px] 2xl:w-[199px]", imgURl: "/teamsmobile.png", icon: Users },
    { name: "Contact Us", path: "/ContactUs", width: "md:w-[130px] lg:w-[170px] xl:w-[200px] 2xl:w-[245px]",  imgURl: "/contactmobile.png", icon: Mail },
  ];

  const handleMenuOpen = () => {
    setIsMenuClosing(false);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsMenuClosing(false);
    }, 300);
  };

  const toggleMenu = () => {
    if (menuOpen) {
      handleMenuClose();
    } else {
      handleMenuOpen();
    }
  };

  return (
    <div className="relative w-full z-50">
      {/* Mobile Menu Header */}
      <div className="top-0 md:hidden relative w-full right-0 flex justify-between items-center p-3 bg-white">
        
        {/* Reverted to the dynamic image block based on pathname */}
        <div className="flex items-center gap-3">
          {pathname == "/" ? (
            <Image
              src="/vector69.png"
              alt="Home"
              width={197}
              height={47}
            />
          ) : pathname.includes("/Events") ? (
            <Image
              src="/eventmobile.png"
              alt="Events"
              width={117}
              height={57}
            />
          ) : pathname.includes("/Blogs") ? (
            <Image
              src="/blogsmobile.png"
              alt="Blogs"
              width={117}
              height={57}
            />
          ) : pathname.includes("/Teams") ? (
            <Image
              src="/teamsmobile.png"
              alt="Teams"
              width={117}
              height={57}
            />
          ) : pathname.includes("/ContactUs") ? (
            <Image
              src="/contactmobile.png"
              alt="Contact"
              width={187}
              height={57}
            />
          ) : (
            <p className="text-black text-sm sm:text-base">
              {pathname.split("/")[1]?.toUpperCase()}
            </p>
          )}
        </div>

        <div className="text-lg flex gap-2 items-center ">
          <button
            className="text-black focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => toggleMenu()}
          >
            <Image src="/mobilenav.png" alt="Menu" width={28} height={28} className="w-[28px] h-[28px]" />
          </button>
          {isLogin && (
            <AccountMenu btnStyle=" flex items-center justify-center text-black border-2 font-semibold border-black p-2 w-8 h-8  bg-white rounded-full focus:outline-none" />
          )}
        </div>
      </div>

      {/* Background Overlay */}
      {menuOpen && (
        <div
          className="fixed md:hidden inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => handleMenuClose()}
        ></div>
      )}

      {/* Mobile Hamburger Menu */}
      {menuOpen && (
        <div className={`md:hidden fixed bg-yellow-600 top-16 left-20 right-3 border-2 border-black rounded-2xl p-2 z-50 shadow-lg ${
          isMenuClosing 
            ? "animate-out slide-out-to-right duration-300 ease-in" 
            : "animate-in slide-in-from-right duration-300 ease-out"
        }`}>
          <div className="flex flex-col">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              // Check if the current page matches the menu item
              const isActive = item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);
              const activeBg = isActive ? "bg-[#fffacd]" : "bg-white"; // Light yellow glow for mobile
              
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    router.push(item.path);
                    handleMenuClose();
                  }}
                  className={`flex items-center gap-3 w-full border-2 border-black rounded-xl hover:bg-gray-50 transition-colors mb-1 ${activeBg}`}
                >
                  <div className={`flex items-center justify-center w-16 h-12 border-r-2 border-black rounded-lg flex-shrink-0 ${activeBg}`}>
                    <IconComponent size={32} className="text-black" />
                  </div>
                  <span className={`text-black font-semibold text-base ${poppins400.className}`}>
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Navbar Container (Desktop) */}
      <div
        className={`hidden md:flex z-[9999px] md:relative md:mx-auto md:mt-[44px] md:bg-transparent md:shadow-none md:justify-center md:items-center md:w-fit md:h-[50px] xl:h-[55px] 2xl:h-[65px]`}
      >
        <div
          className="flex flex-col bg-blue md:bg-black md:flex-row md:items-center md:justify-center gap-2 sm:gap-3 md:gap-0 overflow-visible border-black w-full md:h-[50px] xl:h-[55px] 2xl:h-[65px] md:px-0"
          style={{ borderWidth: 0, borderRadius: 12 }}
        >
          
           <button
            className="flex items-center border-black px-2 py-2 sm:px-[10px] sm:py-[10px] md:w-[170px] md:h-[50px] lg:w-[240px] xl:w-[280px] xl:h-[55px] 2xl:w-[337px] 2xl:h-[65px] transition-colors text-nowrap w-full animate-none"
            style={{ borderWidth: 2, borderRadius: 12, backgroundColor: hoverGDGC ? "#f8d8d8" : "white", marginRight: -1 }}
            onClick={() => {
              router.push("/");
              setMenuOpen(false);
            }}
            onMouseEnter={() => setHoverGDGC(true)}
            onMouseLeave={() => setHoverGDGC(false)}
          >
            <Image src="/vector26.png" alt="GDGC triangles" width={50} height={28} className="w-[30px] h-auto md:w-[35px] lg:w-[40px] xl:w-[50px] 2xl:w-[80px] h-auto" />
            <span className={`text-black text-xs sm:text-lg md:text-xs lg:text-lg xl:text-2xl 2xl:text-[29px] leading-tight sm:leading-[30px] xl:leading-[40px] 2xl:leading-[44px] ml-1 sm:ml-[15px] xl:ml-[20px] 2xl:ml-[29px] whitespace-nowrap ${poppins400.className}`}>
              GDGC GCOEN
            </span>
           </button>

          {menuItems.map((item) => {
            const isHovered = hoverItem === item.name;
            // Check if the current page matches the menu item
            const isActive = item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);
            
            let bgColor = "white";
            // Set background to light yellow if hovered OR active
            if (isHovered || isActive) bgColor = "#fffacd"; 
            
            return (
              <button
                key={item.name}
                className={`flex items-center justify-center border-black text-black text-xs sm:text-sm md:text-xs lg:text-lg xl:text-2xl 2xl:text-[29px] leading-tight md:leading-[30px] xl:leading-[40px] 2xl:leading-[44px] md:h-[50px] xl:h-[55px] 2xl:h-[65px] px-2 sm:px-2 py-2 sm:py-2 ${item.width} transition-colors w-full ${poppins400.className}`}
                style={{ borderWidth: 2, borderRadius: 12, backgroundColor: bgColor, marginLeft: -1, marginRight: -1 }}
                onClick={() => {
                  router.push(item.path);
                  setMenuOpen(false);
                }}
                onMouseEnter={() => setHoverItem(item.name)}
                onMouseLeave={() => setHoverItem(null)}
              >
                {item.name}
              </button>
            );
          })}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;