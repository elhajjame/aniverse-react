import { Star, Film } from "lucide-react";
import CastCard from "./CastCard";

const characters = [
  {
    id: 5627,
    name: "Brook",
    role: "Main",
    image: "https://cdn.myanimelist.net/images/characters/10/161005.jpg",
  },
  {
    id: 64,
    name: "Franky",
    role: "Main",
    image: "https://cdn.myanimelist.net/images/characters/13/210053.jpg",
  },
  {
    id: 18938,
    name: "Jinbe",
    role: "Main",
    image: "https://cdn.myanimelist.net/images/characters/15/307148.jpg",
  },
  {
    id: 40,
    name: "Monkey D. Luffy",
    role: "Main",
    image: "https://cdn.myanimelist.net/images/characters/9/310307.jpg",
  },
];

function AnimeInfo({ anime }) {
  return (
    <div className="space-y-8 md:col-span-2">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {anime.genres.map((genre) => (
            <span
              key={genre.mal_id}
              className="rounded-full border border-orange-500/20 bg-orange-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-orange-400"
            >
              {genre.name}
            </span>
          ))}
        </div>

        <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
          {anime.title}
        </h1>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-400">
          <span className="flex items-center gap-1 font-bold text-orange-400">
            <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
            {anime.score}
          </span>

          <span>{anime.type}</span>
          {/* <span>Airing</span> */}
          <span>{anime.year}</span>
        </div>
      </div>

      <div className="space-y-3 rounded-2xl border border-slate-900 bg-[#0c0b16] p-6">
        <h3 className="text-sm font-black uppercase tracking-wider text-slate-300">
          Synopsis
        </h3>

        <p className="text-sm leading-relaxed text-slate-300">
          {anime.synopsis}
        </p>
      </div>

      {/* Details */}
      <div className="grid grid-cols-2 gap-4 rounded-2xl border border-slate-900 bg-[#0c0b16] p-6 text-sm">
        <div>
          <span className="block text-xs font-extrabold uppercase tracking-widest text-slate-500">
            Studios
          </span>
          <span className="mt-1 block font-semibold text-slate-200">
            {anime.studios.map((std) => (
              <span key={std.name}>{std.name}</span>
            ))}
          </span>
        </div>

        <div>
          <span className="block text-xs font-extrabold uppercase tracking-widest text-slate-500">
            Status
          </span>
          <span className="mt-1 block font-semibold text-slate-200">
            {anime.status}
          </span>
        </div>

        <div>
          <span className="block text-xs font-extrabold uppercase tracking-widest text-slate-500">
            episodes
          </span>
          <span className="mt-1 block font-semibold text-slate-200">
            {anime.episodes} EP
          </span>
        </div>

        <div>
          <span className="block text-xs font-extrabold uppercase tracking-widest text-slate-500">
            rank
          </span>
          <span className="mt-1 block font-semibold text-slate-200">
            {anime.rank}
          </span>
        </div>
      </div>

      {/* Trailer */}
      <div className="space-y-4 rounded-2xl border border-slate-900 bg-[#0c0b16] p-6">
        <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-slate-300">
          <Film className="h-4 w-4 text-orange-500" />
          Watch Promotional Trailer
        </h3>

        <div className="aspect-video overflow-hidden rounded-xl border border-slate-800 bg-black">
          <iframe
            src={anime.trailer.embed_url}
            title="One Piece Trailer"
            className="h-full w-full"
            allowFullScreen
          />
        </div>
      </div>

      {/* Cast */}
      <div className="space-y-4">
        <div className="flex items-end justify-between border-b border-slate-900 pb-2">
          <h3 className="text-sm font-black uppercase tracking-wider text-slate-300">
            Featured Cast
          </h3>

          <a
            href="/anime/21/characters"
            className="text-xs font-bold text-orange-500 transition hover:text-orange-400"
          >
            View Characters →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {characters.map((character) => (
            <CastCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnimeInfo;
