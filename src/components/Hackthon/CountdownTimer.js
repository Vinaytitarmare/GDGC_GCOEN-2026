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
    <div className="relative w-full h-screen bg-black overflow-hidden">

{/* Hack On Title */}
<div className="absolute top-15 left-1/2 -translate-x-1/2 z-20 w-[300px] sm:w-[450px] md:w-[650px]">
  <Image
    src="/svg/Hackon.png"
    alt="HackOn 2.0"
    width={800}
    height={400}
    className="w-full h-auto"
    priority
  />
</div>
      {/* Countdown Timer */}
<div className="flex relative z-20 flex-col items-center justify-center h-full px-2 pt-20">

<div className="absolute inset-0 pointer-events-none"
  style={{
    backgroundImage: `
      repeating-linear-gradient(
        to right,
        rgba(255,255,255,0.12) 0px,
        rgba(255,255,255,0.12) 2px,
        transparent 2px,
        transparent 40px
      ),
      repeating-linear-gradient(
        to bottom,
        rgba(255,255,255,0.12) 0px,
        rgba(255,255,255,0.12) 2px,
        transparent 2px,
        transparent 40px
      )
    `
  }}
/>
  

  <div className="relative flex flex-col items-center justify-center h-full px-4 pt-20">

  {/* GRID BACKGROUND */}
  <div
    style={{
      backgroundImage: `
        repeating-linear-gradient(
          to right,
          rgba(255,255,255,0.12) 0px,
          rgba(255,255,255,0.12) 2px,
          transparent 2px,
          transparent 40px
        ),
        repeating-linear-gradient(
          to bottom,
          rgba(255,255,255,0.12) 0px,
          rgba(255,255,255,0.12) 2px,
          transparent 2px,
          transparent 40px
        )
      `
    }}
  />

  {/* YELLOW STRIP */}
  <div
    className="absolute w-[200%] h-[35px] rotate-[8deg] rounded-md z-10"
    style={{
      background: "linear-gradient(90deg, #facc15, #eab308, #facc15)",
      opacity: 0.25
    }}
  ></div>

  {/* TIMER BOX */}
  <div className="relative z-20 border-4 border-yellow-500 rounded-3xl px-12 py-6 bg-black">
    <div
      className="text-[90px] sm:text-[140px] md:text-[180px] font-extrabold leading-none text-transparent"
      style={{ WebkitTextStroke: "3px white" }}
    >
      {formattedTime}
    </div>
  </div>
</div>
  {clockDetail?.Description && (
    <div className="mt-8">
      <div className="bg-purple-600 text-white text-lg sm:text-xl md:text-2xl font-semibold py-3 px-8 rounded-full">
        {clockDetail.Description}
      </div>
    </div>
  )}
</div>
        {clockDetail?.Description && (
          <div className="mt-6 sm:mt-8">
            <div className="bg-purple-600 text-white text-lg sm:text-xl md:text-2xl font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full">
              {clockDetail.Description}
            </div>
          </div>
        )}

      </div>
  );
};

export default HackOnCountdown;
