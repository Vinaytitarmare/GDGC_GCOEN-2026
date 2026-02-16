import React from "react";
import LandingPage from "@/components/Home/LandingPage";
import Aim from "@/components/Home/Aim";

import EventUs from "@/components/Home/EventUs";

export const metadata = {
  title: 'Home',
  description: 'This is the official website of GDGC GCOEN',
  image:"/GDGCPoster.png",
  keywords: 'gdgc, GDGC, gcoen, GCOEN, google, developer, group, club, college, gcoen, nagpur, Nagpur',
}

const HomePage = () => {
  return (
    <div>
      <LandingPage />
      {/* <Aim /> */}
      <EventUs/>
    </div>
  );
};

export default HomePage;
