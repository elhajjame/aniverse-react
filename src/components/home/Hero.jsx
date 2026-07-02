import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center space-y-8 py-12 text-center md:py-24">

      <h1 className="max-w-4xl select-none text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
        YOUR{" "}
        <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(249,115,22,0.4)]">
          ANIME
        </span>{" "}
        UNIVERSE AWAITS
      </h1>

      <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
        Discover thousands of anime, rate what you love, and build a personal
        library that travels with you.
      </p>

      <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
        <Link
          to="/anime"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 px-8 py-3.5 font-bold text-white shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all duration-300 hover:scale-[1.02] hover:from-orange-600 hover:to-amber-700 hover:shadow-[0_0_35px_rgba(249,115,22,0.65)] sm:w-auto"
        >
          Explore Anime
        </Link>

        <Link
          to="/dashboard"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-8 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:border-slate-700 hover:bg-slate-800/80 sm:w-auto"
        >
          My Dashboard
        </Link>
      </div>
    </section>
  );
}
