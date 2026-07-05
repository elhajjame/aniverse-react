import { NavLink } from "react-router-dom";
import { Sparkles } from "lucide-react";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-900/60 bg-[#020206] backdrop-blur-md transition-all duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="group flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-orange-500 to-amber-600 shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-transform duration-300 group-hover:scale-105">
            <Sparkles className="h-5 w-5 text-white" />
          </div>

          <span className="text-xl font-black uppercase tracking-wider text-white">
            ANI
            <span className="text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]">
              VERSE
            </span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink
            to="/"
            className="rounded-lg border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-sm font-semibold text-white shadow-[0_0_15px_rgba(249,115,22,0.15)] transition-all duration-200"
          >
            Home
          </NavLink>

          <NavLink
            to="/anime"
            className="rounded-lg px-4 py-1.5 text-sm font-medium text-slate-400 transition-all duration-200 hover:bg-slate-900/40 hover:text-white"
          >
            Anime
          </NavLink>

          <NavLink
            to="/characters"
            className="rounded-lg px-4 py-1.5 text-sm font-medium text-slate-400 transition-all duration-200 hover:bg-slate-900/40 hover:text-white"
          >
            Characters
          </NavLink>

          <NavLink
            to="/favorites"
            className="rounded-lg px-4 py-1.5 text-sm font-medium text-slate-400 transition-all duration-200 hover:bg-slate-900/40 hover:text-white"
          >
            Favorites
          </NavLink>

          <NavLink
            to="/my-library"
            className="rounded-lg px-4 py-1.5 text-sm font-medium text-slate-400 transition-all duration-200 hover:bg-slate-900/40 hover:text-white"
          >
            Library
          </NavLink>

          <NavLink
            to="/my-ratings"
            className="rounded-lg px-4 py-1.5 text-sm font-medium text-slate-400 transition-all duration-200 hover:bg-slate-900/40 hover:text-white"
          >
            Ratings
          </NavLink>

          <NavLink
            to="/dashboard"
            className="rounded-lg px-4 py-1.5 text-sm font-medium text-slate-400 transition-all duration-200 hover:bg-slate-900/40 hover:text-white"
          >
            Dashboard
          </NavLink>
        </nav>

        <div className="md:hidden">
          <select className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-slate-200 focus:outline-none">
            <option>Home</option>
            <option>Anime</option>
            <option>Characters</option>
            <option>Favorites</option>
            <option>Library</option>
            <option>Ratings</option>
            <option>Dashboard</option>
          </select>
        </div>
      </div>
    </header>
  );
}
