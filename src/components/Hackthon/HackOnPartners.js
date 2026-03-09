import React from "react";

const HackOnPartners = () => {
  return (
    <>
    <div className="w-full flex flex-col gap-5 p-5">
      <h3 className="font-medium text-white text-3xl md:py-5 md:text-5xl text-center">
        Title Sponsor
      </h3>

   
      <div className="flex justify-center items-center gap-x-20 gap-y-10 flex-wrap">
        <img src="/sponsor/Grras Nagpur Logo (1).png" alt="Grras Nagpur" className="w-3/4 h-32 md:w-auto max-w-[250px] md:max-w-[300px]" />
        
        {/* <img src="/sponsor/vikalp.png" alt="Sponsor 3" className="w-3/4 h-36 md:w-auto max-w-[250px] md:max-w-[300px]" /> */}
      </div>
    </div>
    <div className="w-full flex flex-col gap-5 p-5">
      <h3 className="font-medium text-white text-3xl md:py-5 md:text-5xl text-center">
        Powered By
      </h3>

   
      <div className="flex justify-center items-center gap-x-20 gap-y-10 flex-wrap">
        <img src="/sponsor/Windsurf-white-wordmark.png" alt="Codon" className="w-3/4 h-32 md:w-auto max-w-[250px] md:max-w-[300px]" />
        
      </div>
    </div>
    <div className="w-full flex flex-col gap-5 p-5">
      <h3 className="font-medium text-white text-3xl md:py-5 md:text-5xl text-center">
       Collaboration With
      </h3>

    
      <div className="flex justify-center items-center gap-x-5 gap-y-10 flex-wrap">
  <img
    src="/sponsor/New-logo-removebg-preview.png"
    alt="Learner_Den"
    className="w-full h-56 md:h-72 lg:h-80 max-w-[1000px] object-contain"
  />
</div>
    </div>
    <div className="w-full flex flex-col gap-5 p-5">
      <h3 className="font-medium text-white text-3xl md:py-5 md:text-5xl text-center">
        Network Partner
      </h3>

    
      <div className="flex justify-center items-center gap-x-20 gap-y-10 flex-wrap">
        
        <img src="/sponsor/bsnl.png" alt="Learner_Den" className="w-1/4 md:w-auto max-w-[150px] md:max-w-[200px]" />
       
      </div>
    </div>

     <div className="w-full flex flex-col gap-5 p-5">
      <h3 className="font-medium text-white text-3xl md:py-5 md:text-5xl text-center">
      Certificate Partner
      </h3>

    
      <div className="flex justify-center items-center gap-x-20 gap-y-10 flex-wrap">
        
        <img src="/sponsor/certify (1).png" alt="Learner_Den" className="w-2/4 md:w-auto max-w-[200px] md:max-w-[250px]" />
       
      </div>
    </div>
    </>
    
  );
};

export default HackOnPartners;