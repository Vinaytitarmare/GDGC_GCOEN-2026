import React from "react";
// 1. Import the new footer
import EventBlogFooter from "@/components/Utility/EventBlogFooter"; 

const Bloglayout = ({ children }) => {
  return (
    <> {/* Wrap in a fragment */}
      <div className="container py-5 px-5 mt-20 md:mt-0 mx-auto min-h-[60vh]">
        {children}
      </div>
      
      {/* 2. Add the footer at the bottom */}
      <EventBlogFooter />
    </>
  );
};

export default Bloglayout;