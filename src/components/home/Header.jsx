import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Header({ title, description }) {
  return (
    <div className="flex items-end justify-between border-b border-slate-900/60 pb-5">
      <div>
        <h2 className="text-xl font-black uppercase tracking-wider text-white sm:text-2xl">
          {title}
        </h2>
        <p className="text-xs text-slate-500 pl-3">{description}</p>
      </div>

      <Link
        to="/anime"
        className="group flex items-center gap-1 text-xs font-bold text-orange-500 transition-colors hover:text-orange-400 sm:text-sm"
      >
        Browse all{" "}
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}
