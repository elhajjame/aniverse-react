import { Heart, BookOpen, Award } from "lucide-react";
import { useAnime } from "../../context/animeContext";

function AnimeSidebar({ anime }) {
  const { status, setStatus, toggleFavorite, addToLibrary } = useAnime();
  function handleStatusChange(e) {
    const newStatus = e.target.value;

    setStatus(newStatus);

    if (newStatus !== "") {
      addToLibrary(anime, newStatus);
    }
  }
  return (
    <aside className="space-y-6">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-slate-900 bg-[#0c0b16] shadow-2xl">
        <img
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          className="h-full w-full object-cover"
        />

        <button
          onClick={() => toggleFavorite(anime)}
          className="absolute right-4 top-4 rounded-xl border border-slate-800 bg-black/75 p-3.5 text-slate-300 backdrop-blur-md transition hover:text-white"
        >
          <Heart className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-4 rounded-2xl border border-slate-900 bg-[#0c0b16] p-5 shadow-xl">
        <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-slate-200">
          <BookOpen className="h-4 w-4 text-orange-500" />
          Track Watch Progress
        </h3>

        <div className="space-y-3">
          <label className="block text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
            My Status
          </label>

          <select
            value={status}
            onChange={handleStatusChange}
            className="w-full rounded-xl border border-slate-800 bg-[#04030a] px-3 py-2.5 text-sm text-slate-200 outline-none transition focus:border-orange-500/50"
          >
            <option value="">Not in Library</option>
            <option value="plan to watch">Plan To Watch</option>
            <option value="watching">Watching</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="space-y-4 rounded-2xl border border-slate-900 bg-[#0c0b16] p-5 shadow-xl">
        <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-slate-200">
          <Award className="h-4 w-4 text-orange-500" />
          Personal Rating
        </h3>

        <button className="w-full rounded-xl border border-slate-800 bg-[#04030a] py-2.5 text-xs font-bold uppercase tracking-widest text-slate-300 transition hover:border-slate-700 hover:bg-slate-900/50 hover:text-white">
          Add Notes & Rating
        </button>
      </div>
    </aside>
  );
}

export default AnimeSidebar;
