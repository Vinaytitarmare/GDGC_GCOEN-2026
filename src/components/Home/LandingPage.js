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
          top: "66px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "195px",
          height: "105px",
        }}
      />
      <h1
        style={{
          position: "absolute",
          width: "1114px",
          height: "128px",
          left: "calc(50% - 1114px / 2)",
          top: "176px",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "89px",
          lineHeight: "134px",
          display: "flex",
          alignItems: "center",
          color: "#F9AB00",
          WebkitTextStroke: "1px #000000",
        }}
      >
        Google Developer Group
      </h1>

      <div
        style={{
          position: "absolute",
          width: "950px",
          height: "96px",
          left: "317px",
          top: "376px",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "40px",
          lineHeight: "60px",
          display: "flex",
          alignItems: "center",
          color: "#000000",
        }}
      >
        GOVERNMENT COLLEGE OF ENGINEERING NAGPUR
      </div>
      <img
        src="/main.png"
        alt="Main"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "538px",
          width: "1136px",
          height: "430px",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "549px",
          height: "128px",
          left: "520px",
          top: "272px",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "89px",
          lineHeight: "134px",
          display: "flex",
          alignItems: "center",
          color: "#F9AB00",
          WebkitTextStroke: "1px #000000",
        }}
      >
        On Campus
      </div>
      <img
        src="/polygon4.png"
        alt="Polygon 4"
        style={{
          position: "absolute",
          top: "465px",
          left: "100px",
          width: "60.92px",
          height: "43.09px",
          transform: "rotate(-7.31deg)",
        }}
      />
      <img
        src="/polygon1.png"
        alt="Polygon 1"
        style={{
          position: "absolute",
          top: "142.08px",
          left: "1301.43px",
          width: "134px",
          height: "139px",
          transform: "rotate(2.72deg)",
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
      </div>
    </div>
  );
};

export default LandingPage;