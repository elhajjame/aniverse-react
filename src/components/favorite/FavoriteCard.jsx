import { Link } from "react-router-dom";
import { Star, Trash2 } from "lucide-react";
import { useAnime } from "../../context/animeContext";

function FavoriteCard({ anime }) {
  const { unFavoritesAnime } = useAnime();
  console.log("this is the anime", anime);
  console.log();
  return (
    <Link
      to={`/anime/${anime.mal_id}`}
      className="relative col-span-6 md:col-span-4 lg:col-span-2 mx-auto w-[180px] group flex flex-col overflow-hidden rounded-xl border border-slate-900 bg-[#0c0b16] shadow-lg transition-all duration-300 hover:border-orange-500/30 hover:shadow-orange-500/10"
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          unFavoritesAnime(anime.id);
        }}
        className="absolute right-2 top-2 z-20 rounded-lg bg-black/70 p-2 text-red-500 transition hover:bg-red-500 hover:text-white"
      >
        <Trash2 className="h-4 w-4" />
      </button>

      <div className="relative aspect-[3/4] overflow-hidden bg-slate-900">
        <img
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
      </div>

      <div className="flex flex-grow flex-col justify-between p-3.5">
        <h3 className="line-clamp-2 text-xs font-bold uppercase tracking-tight text-slate-200 transition-colors group-hover:text-orange-400">
          {anime.title}
        </h3>

        <div className="flex items-center justify-between border-t border-slate-900/60 pt-2 text-[10px] font-semibold text-slate-500">
          <span className="flex items-center gap-1 text-orange-400">
            <Star className="h-3 w-3 fill-orange-500 text-orange-500" />
            {anime.score ?? "N/A"}
          </span>

          <span>{anime.episodes ? `${anime.episodes} ep` : "—"}</span>

          <span>{anime.year ?? "—"}</span>
        </div>
      </div>
    </Link>
  );
}

export default FavoriteCard;
