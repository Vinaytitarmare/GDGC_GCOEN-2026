
const Aim = () => {
  return (
    <div className="z-0 relative container m-auto px-5"
    // data-aos="fade-up"
    >
      {/* <div  className="mx-5 md:mx-10 "> */}
      <div
        className="z-0 mt-11 mx-auto items-end justify-end aspect-[207/214] h-auto bg-cover bg-center block sm:hidden"
        style={{
          backgroundImage: "url('/CollegeBgMOb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundImage: "url('/CollegeBgMob.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "opacity 0.5s ease-in-out",
            opacity: 1,
            // animation: "fadeIn 1s forwards", // Removed inline keyframes which are invalid in style object
          }}
          className="absolute inset-0 z-0 bg-cover bg-center animate-in fade-in duration-1000"
        ></div>
      </div>
    </div>
  );
};

export default Aim;
