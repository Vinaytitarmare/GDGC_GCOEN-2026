"use client";

import { client, GDGCDatabase, HackOnTimerCollection } from "@/config/appwrite";
import { ListCollectionData } from "@/Services/Appwrite";
import Image from "next/image";
import { useEffect, useState } from "react";

const HackOnCountdown = ({ startTime = "09:00", endTime = "17:00" }) => {
  const [formattedTime, setFormattedTime] = useState("08:00:00");
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

      let timeDiff = 0;
      if (now < start) {
        timeDiff = end - start;
      } else if (now < end) {
        timeDiff = end - now;
      } else {
        timeDiff = 0;
      }

      const secondsRemaining = Math.floor(timeDiff / 1000);
      const hours = String(Math.floor(secondsRemaining / 3600)).padStart(
        2,
        "0"
      );
      const minutes = String(
        Math.floor((secondsRemaining % 3600) / 60)
      ).padStart(2, "0");
      const seconds = String(secondsRemaining % 60).padStart(2, "0");
      setFormattedTime(`${hours}:${minutes}:${seconds}`);
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

    {/* Header Logos */}
    <div className="absolute top-0 left-0 right-0 w-full flex justify-between items-start p-4 sm:p-8 z-50">
      <div className="w-32 sm:w-40 md:w-56">
        <Image
          src="/svg/gdg log.jpeg"
          alt="GDG Logo"
          width={400}
          height={200}
          className="w-full h-auto object-contain rounded-xl"
          priority
        />
      </div>
      <div className="w-16 sm:w-20 md:w-28">
        <Image
          src="/svg/grass.jpeg"
          alt="Grass Logo"
          width={200}
          height={200}
          className="w-full h-auto object-contain rounded-xl"
          priority
        />
      </div>
    </div>

    {/* Grid Background */}
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            to right,
            rgba(255,255,255,0.07) 0px,
            rgba(255,255,255,0.07) 1px,
            transparent 1px,
            transparent 40px
          ),
          repeating-linear-gradient(
            to bottom,
            rgba(255,255,255,0.07) 0px,
            rgba(255,255,255,0.07) 1px,
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
  <div className="relative w-full flex items-center justify-center">

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
            className="text-[70px] sm:text-[80px] md:text-[160px] font-extrabold leading-none text-transparent"
            style={{ WebkitTextStroke: "2px white" }}
          >
            {formattedTime}
          </div>
        </div>

      </div>
<div className="w-screen">
  <Image
    src="/svg/new_footer.jpeg"
    alt="HackOn 2.0"
    width={1920}
    height={140}
    className="w-full mt-[-30px] h-[80px] sm:h-[100px] md:h-[120px] object-contain"
    priority
  />
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
