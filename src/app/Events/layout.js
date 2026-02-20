import { UserRegistrationPaymentProvider } from "@/context/RegistrationPaymentContext";
// 1. Import the new footer
import EventBlogFooter from "@/components/Utility/EventBlogFooter";

const Eventlayout = ({ children }) => {
  return (
    <> {/* Wrap in a fragment */}
      <div className="container py-5 px-5 pt-5 m-auto min-h-[60vh]">
        <UserRegistrationPaymentProvider>
          {children}
        </UserRegistrationPaymentProvider>
      </div>
      
      {/* 2. Add the footer at the bottom */}
      <EventBlogFooter />
    </>
  );
};

export default Eventlayout;