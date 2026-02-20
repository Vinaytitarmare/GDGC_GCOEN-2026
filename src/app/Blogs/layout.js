// 1. Import the new footer
import EventBlogFooter from "@/components/Utility/EventBlogFooter";

const Bloglayout = ({ children }) => {
  return (
    <> {/* Wrap in a fragment */}
      <div className="container py-5 px-5 pt-5 mx-auto min-h-[60vh]">
        {children}
      </div>
      
      {/* 2. Add the footer at the bottom */}
      <EventBlogFooter />
    </>
  );
};

export default Bloglayout;