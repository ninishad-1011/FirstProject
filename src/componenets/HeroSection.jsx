import React from "react";

const HeroSection = () => {
  return (
    <div
      className="flex flex-col bg-blue-300 items-center justify-center h-[82vh] py-4"
      style={{
        backgroundImage: "url('/src/assets/pexels-veeterzy-303383.jpg')",
        backgroundSize: "cover",
        backgroudPosition: "center",
      }}
    >
      <h2 className="text-3xl md:text-6xl text-white py-4 font-extrabold">
        Welcome to My Website...
      </h2>
      <p className='py-4 font-bold text-2xl md:text-3xl text-white'>Your Journey Start Here...</p>
    
     <button
  className="
    w-full max-w-xs  
    bg-blue-600 text-white 
    px-4 py-2 text-sm   
    rounded-lg mt-4 
    hover:bg-blue-700 transition 
    md:px-8 md:py-3 md:text-base md:w-auto  
  "
>
  Purchase Product
</button>

    </div>
  );
};

export default HeroSection;
