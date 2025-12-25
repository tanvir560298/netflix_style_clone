import React from "react";

const Part2 = () => {
  return (
    <section className="w-11/12 sm:w-10/12 lg:w-9/12 mx-auto py-10 sm:py-14 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Text */}
        <div className="text-white text-center lg:text-left lg:w-1/2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            Enjoy on your TV
          </h2>

          <p className="mt-4 text-base sm:text-xl lg:text-2xl text-white/90">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>

        {/* TV + Video */}
        <div className="relative lg:w-1/2 w-full flex justify-center">
          {/* TV image */}
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="TV"
            className="relative z-10 w-[320px] sm:w-[520px] lg:w-[600px]"
          />

          {/* Video inside TV */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="
              absolute 
              top-[20%] left-[13%]
              w-[74%] h-[54%]
              object-cover
            "
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Part2;
