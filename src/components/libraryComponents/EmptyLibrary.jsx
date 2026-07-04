import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

function EmptyLibrary() {
  return (
    <div className="rounded-2xl border border-slate-900 bg-[#0c0b16] py-20 text-center">
      <BookOpen className="mx-auto mb-4 h-12 w-12 text-slate-600" />

      <h3 className="text-lg font-bold text-slate-300">
        Your library is empty
      </h3>

      <p className="mx-auto mt-1 max-w-sm text-sm text-slate-500">
        Track what you plan to watch, are currently watching, or have completed
        from the anime details page.
      </p>

      <Link
        to="/anime"
        className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 px-6 py-2.5 text-xs font-bold uppercase text-white shadow-lg transition hover:opacity-90"
      >
        Explore Anime
      </Link>
    </div>
  );
}

export default EmptyLibrary;
