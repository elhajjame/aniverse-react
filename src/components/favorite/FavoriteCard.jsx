import { Link } from "react-router-dom";
import { Star, Trash2 } from "lucide-react";

function FavoriteCard() {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-900 bg-[#0c0b16] shadow-lg">
      <Link
        to="/anime/8"
        className="relative block aspect-[3/4] overflow-hidden bg-slate-900"
      >
        <img
          src="https://cdn.myanimelist.net/images/anime/7/21569.jpg"
          alt="Beet the Vandel Buster"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-65" />
      </Link>

      <button className="absolute top-2 right-2 z-20 rounded-lg border border-slate-800/80 bg-black/75 p-1.5 text-slate-300 transition-colors hover:bg-rose-900 hover:text-white">
        <Trash2 className="h-3.5 w-3.5" />
      </button>

      <div className="flex flex-grow flex-col justify-between space-y-2 p-3">
        <Link to="/anime/8" className="block">
          <h3 className="line-clamp-2 text-xs font-bold uppercase leading-snug tracking-tight text-slate-200 transition-colors hover:text-orange-400 sm:text-[13px]">
            Beet the Vandel Buster
          </h3>
        </Link>

        <div className="flex items-center justify-between border-t border-slate-900/60 pt-2 text-[10px] font-semibold text-slate-500">
          <span className="flex items-center gap-0.5 font-bold text-orange-400">
            <Star className="inline h-3.5 w-3.5 fill-orange-500 text-orange-500" />
            6.97
          </span>

          <span>TV</span>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;
