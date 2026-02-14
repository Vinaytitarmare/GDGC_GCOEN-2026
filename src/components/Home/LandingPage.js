"use client";

import React from "react";
import { useRouter } from "next/navigation";
import DefaultBtn from "../Utility/DefaultBtn";

const LandingPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col container m-auto mt-4 md:-mt-24 items-center justify-center min-h-screen bg-white px-2 sm:px-4 relative">
      <img
        src="/gdgc.png"
        alt="GDGC Logo"
        style={{
          position: "absolute",
          top: "126px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "195px",
          height: "105px",
        }}
      />
      <div className="mb-8">
        <img
          src="/Frame 19.svg"
          alt="Mobile SVG"
          className="block sm:hidden w-[20rem] md:w-[35rem] lg:w-[40rem] mt-2 px-4 sm:px-2"
          loading="lazy"
        />
        <img
          src="/Frame 191.svg"
          alt="Additional Mobile SVG"
          className="block sm:hidden w-[30rem] md:w-[35rem] lg:w-[40rem] mt-4 px-4 sm:px-2"
          loading="lazy"
        />
        <div className="mt-10 flex justify-center items-center w-full">
          <DefaultBtn
            func={() => {
              router.push("/ContactUs");
            }}
            name="Event with us"
            disabled="disabled:bg-blue3"
            HoverColor="hover:bg-blue mx-5 focus:ring-blue"
            txtColor="w-full md:w-fit text-black border-2 border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;