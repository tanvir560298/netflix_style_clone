import React from "react";

const Part5 = () => {
  return (
    <section className="w-11/12 sm:w-10/12 lg:w-9/12 mx-auto py-10 sm:py-14 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://occ-0-2849-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
            alt="Kids profile"
            className="w-[280px] sm:w-[420px] lg:w-[520px]"
          />
        </div>

        {/* Text */}
        <div className="text-white text-center lg:text-left lg:w-1/2 flex flex-col gap-4 sm:gap-6">
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            Create profiles for kids
          </h3>

          <p className="text-base sm:text-xl lg:text-2xl text-white/90">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Part5;
