import React from "react";

const Part3 = () => {
  return (
    <section className="w-11/12 sm:w-10/12 lg:w-9/12 mx-auto py-10 sm:py-14 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="mobile"
            className="w-[280px] sm:w-[420px] lg:w-[500px]"
          />
        </div>

        {/* Text */}
        <div className="text-white text-center lg:text-left lg:w-1/2 flex flex-col gap-4 sm:gap-6">
          <h3 className="font-bold text-2xl sm:text-4xl lg:text-5xl leading-snug">
            Download your shows to watch offline
          </h3>

          <p className="text-base sm:text-xl lg:text-2xl text-white/90">
            Save your favourites easily and always have something to watch.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Part3;
