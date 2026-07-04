import { Link } from "react-router-dom";
import { Trash2, Star } from "lucide-react";

function LibraryCard() {
  return (
    <div className="col-span-6 md:col-span-4 lg:col-span-2 group mx-auto w-[180px] flex flex-col justify-between overflow-hidden rounded-xl border border-slate-900 bg-[#0c0b16] shadow-lg transition-all duration-300 hover:border-orange-500/30 hover:shadow-orange-500/10">
      <div className="relative">
        <Link
          to={""}
          className="relative block aspect-[3/4] overflow-hidden bg-slate-900"
        >
          <img
            src="https://cdn.myanimelist.net/images/anime/10/19969.jpg"
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-65" />
        </Link>

        <div className="absolute right-2 top-2 z-20 flex gap-1">
          <button
            className="cursor-pointer rounded-lg border border-slate-800/80 bg-black/75 p-1.5 text-slate-300 transition-colors hover:bg-rose-950 hover:text-white"
            title="Remove from Library"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="flex flex-grow flex-col justify-between space-y-3 p-3">
        <Link to={`/anime/`}>
          <h3 className="line-clamp-2 text-xs font-bold uppercase leading-snug tracking-tight text-slate-200 transition-colors hover:text-orange-400 sm:text-[13px]">
            test title
          </h3>
        </Link>

        <div className="flex flex-col gap-1.5 border-t border-slate-900/60 pt-2 text-[10px] text-slate-500">
          <div className="flex justify-between font-semibold">
            <span className="flex items-center gap-0.5 text-orange-400">
              <Star className="h-3 w-3 fill-orange-500 text-orange-500" />
              test score 66
            </span>

            <span>10 ep</span>
          </div>
          <select className="cursor-pointer mt-1.5 w-full rounded-lg border border-slate-800 bg-[#04030a] px-2 py-1.5 text-[10px] font-bold text-slate-300 outline-none focus:border-orange-500/50">
            <option value="">Plan To Watch</option>
            <option value="">Watching</option>
            <option value="">Completed</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default LibraryCard;
