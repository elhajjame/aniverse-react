import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useAnime } from "../../context/animeContext";

function SearchComponent() {
  const genres = [
    {
      id: 1,
      title: "action",
    },
    {
      id: 2,
      title: "adventure",
    },
    {
      id: 3,
      title: "comedy",
    },
    {
      id: 4,
      title: "drama",
    },
    {
      id: 5,
      title: "fantasy",
    },
    {
      id: 6,
      title: "horror",
    },
    {
      id: 7,
      title: "sci-fi",
    },
  ];

  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("all");
  const { fetchSearchAnime } = useAnime();

  useEffect(() => {
    fetchSearchAnime(query, genre);
  }, [query, genre]);
  return (
    <div className="grid grid-cols-1 items-center gap-4 rounded-2xl border border-slate-900/60 bg-[#0c0b16] p-5 md:grid-cols-4">
      <div className="relative md:col-span-2">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search by anime name..."
          className="w-full rounded-xl border border-slate-800 bg-[#04030a] py-2.5 pl-11 pr-4 text-sm text-slate-200 placeholder:text-slate-600 transition-all focus:border-orange-500/50 focus:outline-none"
        />
      </div>

      <div>
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full rounded-xl border border-slate-800 bg-[#04030a] px-4 py-2.5 text-sm text-slate-300 transition-all focus:border-orange-500/50 focus:outline-none"
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option value={genre.title} key={genre.id}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SearchComponent;
