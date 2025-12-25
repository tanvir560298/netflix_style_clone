import React from "react";

const Part6 = () => {
  return (
    <section className="w-11/12 sm:w-10/12 lg:w-9/12 mx-auto py-10 sm:py-14 lg:py-20 text-white">
      
      {/* Title */}
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12">
        Frequently Asked Questions
      </h1>

      {/* FAQ items */}
      <div className="flex flex-col items-center gap-4 sm:gap-6">
        
        <div className="w-full md:w-10/12 lg:w-8/12 bg-[#2d2d2d] flex justify-between items-center px-5 sm:px-7 py-4 sm:py-5 text-base sm:text-xl lg:text-2xl cursor-pointer">
          <span>What is Netflix?</span>
          <span className="text-3xl">+</span>
        </div>

        <div className="w-full md:w-10/12 lg:w-8/12 bg-[#2d2d2d] flex justify-between items-center px-5 sm:px-7 py-4 sm:py-5 text-base sm:text-xl lg:text-2xl cursor-pointer">
          <span>How much does Netflix cost?</span>
          <span className="text-3xl">+</span>
        </div>

        <div className="w-full md:w-10/12 lg:w-8/12 bg-[#2d2d2d] flex justify-between items-center px-5 sm:px-7 py-4 sm:py-5 text-base sm:text-xl lg:text-2xl cursor-pointer">
          <span>What can I watch on Netflix?</span>
          <span className="text-3xl">+</span>
        </div>

        <div className="w-full md:w-10/12 lg:w-8/12 bg-[#2d2d2d] flex justify-between items-center px-5 sm:px-7 py-4 sm:py-5 text-base sm:text-xl lg:text-2xl cursor-pointer">
          <span>Where can I watch?</span>
          <span className="text-3xl">+</span>
        </div>

      </div>
    </section>
  );
};

export default Part6;
