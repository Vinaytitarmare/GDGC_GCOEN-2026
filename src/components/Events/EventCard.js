"use client";
import { useRouter } from "next/navigation";
import UniversalCard from "../Utility/UniversalCard";

const EventCard = ({
  Title,
  Description,
  FeaturedURL,
  StartDate,
  location,
  id,
  Reports,
  type = "upcoming" // Default to upcoming
}) => {
  const router = useRouter();
  
  // Determine label based on type
  const label = type === "past" ? "Download report" : "Register now";

  // For past events, use report URL for download; for upcoming, go to /hackon
  const link = type === "past" ? (Reports || "#") : "/hackon";

  return (
    <div 
      data-aos="fade-up"
      className="w-[320px] md:w-[450px] min-w-[300px] h-[350px] md:h-[480px] flex-shrink-0"
    >
      <UniversalCard
        imageSrc={FeaturedURL}
        title={Title}
        date={StartDate}
        location={location}
        link={link}
        label={label}
        type={type}
        downloadName={type === "past" ? `${Title}.pdf` : null}
      />
    </div>
  );
};

export default EventCard;
