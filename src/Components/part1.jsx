import background from "../assets/images/bg.jpg";
import logo from "../assets/images/logo.svg";

const Part1 = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-white">
      {/* BG image */}
      <img
        src={background}
        alt="background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-white h-full flex flex-col">
        {/* Top bar */}
        <div className="w-11/12 sm:w-10/12 lg:w-9/12 mx-auto flex items-center justify-between py-4 sm:py-6">
          <figure className="w-28 sm:w-32 md:w-36">
            <img className="h-full w-full object-contain" src={logo} alt="logo" />
          </figure>

          <div className="flex items-center gap-2 sm:gap-3">
            <button className="text-white bg-transparent border border-white px-3 py-1 rounded-md text-sm sm:text-base">
              English
            </button>
            <button className="text-white bg-red-700 border border-red-700 px-3 py-1 rounded-md text-sm sm:text-base">
              Sign In
            </button>
          </div>
        </div>

        {/* Middle text (centered in remaining space) */}
        <div className="flex-1 w-11/12 sm:w-10/12 lg:w-9/12 mx-auto text-center flex flex-col items-center justify-center gap-4 sm:gap-6">
          <h1 className="font-bold text-2xl sm:text-4xl lg:text-5xl leading-snug">
            Enjoy big movies, hit series and more from ₹ 149.
          </h1>

          <h2 className="font-semibold text-lg sm:text-2xl lg:text-3xl">
            Join today. Cancel anytime.
          </h2>

          <h3 className="text-base sm:text-lg lg:text-xl max-w-2xl">
            Ready to watch? Enter your email to create or restart your membership.
          </h3>

          {/* Email + button */}
          <div className="w-full max-w-xl flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-2 sm:mt-4">
            <input
              className="w-full bg-transparent border border-white/70 text-white placeholder-white/70 rounded-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-white/40"
              type="email"
              placeholder="Email Address"
            />
            <button className="bg-red-600 rounded-sm py-3 px-5 text-lg sm:text-xl whitespace-nowrap">
              Get Started &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Part1;
