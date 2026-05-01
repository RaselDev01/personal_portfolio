import React from 'react';

const HireMeSection = () => {
  return (
    <>
    <div 
      className="relative w-full h-auto flex items-center justify-center bg-fixed  bg-no-repeat bg-cover mb-8 "
      style={{
        backgroundImage: `linear-gradient(rgba(15, 15, 20, 0.8), rgba(5, 5, 10, 0.85)), url('assets/intro-bg-1.jpg')`
      }}
    >
      <div className="text-center px-4 py-30 ">
        <h2 className="text-white text-2xl md:text-4xl font-semibold mb-8 tracking-tight font-poppins">
          Interested in working with me?
        </h2>

        <button className="bg-sunC hover:bg-sunC/80 text-black rounded-3xl font-semibold py-3 px-10 text-lg transition-all duration-300">
          Hire Me!
        </button>
      </div>
    </div>
    </>
  );
};

export default HireMeSection;