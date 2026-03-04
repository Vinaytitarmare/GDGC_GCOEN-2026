"use client";

import { client, GDGCDatabase, HackOnTimerCollection } from "@/config/appwrite";
import { ListCollectionData } from "@/Services/Appwrite";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const HackOnCountdown = ({ startTime = "9:00", endTime = "17:00" }) => {
  const [formattedTime, setFormattedTime] = useState("00:00:00");
  const [clockDetail, setClockDetail] = useState(null);

  // Convert HH:MM to today's Date object
  const getTimeToday = (timeString) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  };

  // Fetch clock details
  const getDescription = async () => {
    try {
      const res = await ListCollectionData(HackOnTimerCollection);
      setClockDetail(res.documents[0]);
    } catch (error) {
      console.error("Failed to fetch documents:", error);
    }
  };

  useEffect(() => {
    getDescription();

    const intervalId = setInterval(() => {
      const now = new Date();
      const start = getTimeToday(startTime);
      const end = getTimeToday(endTime);

      if (now < start) {
        setFormattedTime("00:00:00");
      } else if (now < end) {
        const secondsRemaining = Math.floor((end - now) / 1000);
        const hours = String(Math.floor(secondsRemaining / 3600)).padStart(
          2,
          "0"
        );
        const minutes = String(
          Math.floor((secondsRemaining % 3600) / 60)
        ).padStart(2, "0");
        const seconds = String(secondsRemaining % 60).padStart(2, "0");
        setFormattedTime(`${hours}:${minutes}:${seconds}`);
      } else {
        setFormattedTime("00:00:00");
      }
    }, 1000);

    // Realtime data update
    const unsubscribe = client.subscribe(
      `databases.${GDGCDatabase}.collections.${HackOnTimerCollection}.documents`,
      (response) => {
        if (
          response.events.some(
            (event) => event.includes(".create") || event.includes(".update")
          )
        ) {
          setClockDetail(response.payload);
        }
        if (response.events.some((event) => event.includes(".delete"))) {
          setClockDetail(null);
        }
      }
    );

    return () => {
      unsubscribe();
      clearInterval(intervalId);
    };
  }, []);

return (
  <div className="relative w-full min-h-screen bg-black overflow-hidden">

    {/* Grid Background */}
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            to right,
            rgba(255,255,255,0.05) 0px,
            rgba(255,255,255,0.05) 1px,
            transparent 1px,
            transparent 40px
          ),
          repeating-linear-gradient(
            to bottom,
            rgba(255,255,255,0.05) 0px,
            rgba(255,255,255,0.05) 1px,
            transparent 1px,
            transparent 40px
          )
        `
      }}
    />

    {/* Main Content */}
<div className="relative z-20 flex flex-col items-center justify-center min-h-screen gap-4 sm:gap-16">

  {/* Title */}
  <div className="w-[300px] sm:w-[380px] md:w-[600px]">
    <Image
      src="/svg/Hackon.png"
      alt="HackOn 2.0"
      width={800}
      height={400}
      className="w-full h-auto"
      priority
    />
  </div>

  {/* Timer Section */}
  <div className="relative w-ful flex items-center justify-center">

        {/* Yellow Strip */}
        <div
          className="absolute w-[250%] h-[20px] sm:h-[30px] rotate-[5deg] z-10"
          style={{
            background: "linear-gradient(90deg, #facc15, #eab308, #facc15)",
            opacity: 0.25
          }}
        />

        {/* Timer Box */}
        <div className="relative z-20 border-2 sm:border-4 border-yellow-500 rounded-2xl sm:rounded-3xl px-6 sm:px-12 py-4 sm:py-6 bg-black">
          <div
            className="text-[70px] sm:text-[800px] md:text-[160px] font-extrabold leading-none text-transparent"
            style={{ WebkitTextStroke: "2px white" }}
          >
            {formattedTime}
          </div>
        </div>

      </div>

      {/* Description */}
      {clockDetail?.Description && (
        <div className="mt-6 sm:mt-8 px-4 text-center">
          <div className="bg-purple-600 text-white text-sm sm:text-xl md:text-2xl font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full">
            {clockDetail.Description}
          </div>
        </div>
      )}

    </div>
  </div>
);
};

export default HackOnCountdown;
