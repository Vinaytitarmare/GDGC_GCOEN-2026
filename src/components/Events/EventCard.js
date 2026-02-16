"use client";
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
  // Determine label and link based on type
  const label = type === "past" ? "Download report" : "Register now";
  
  // For past events with Reports, trigger download instead of navigation
  const handleClick = (e) => {
    if (type === "past" && Reports) {
      e.preventDefault();
      const link = document.createElement("a");
      link.href = Reports;
      link.download = `${Title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(Reports);
    }
  };

  return (
    <div 
      data-aos="fade-up"
      className="w-[300px] md:w-[450px] min-w-[300px] h-[480px] md:h-[580px] flex-shrink-0"
    >
      <div onClick={handleClick}>
        <UniversalCard
          imageSrc={FeaturedURL}
          title={Title}
          date={StartDate}
          location={location}
          link={type === "past" && Reports ? "#" : `/Events/${id}`}
          label={label}
          type={type}
        />
      </div>
    </div>
  );
};

export default EventCard;
