import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <Link
      to={`/characters/${character.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-900 bg-[#0c0b16] shadow-lg transition-all duration-300 hover:border-orange-500/30 hover:shadow-orange-500/10"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-900">
        <img
          src={character.images.jpg.image_url}
          alt={character.name}
          loading="lazy"
          className="h-full w-full object-cover "
        />
      </div>

      <div className="flex flex-grow flex-col justify-between p-3">
        <h3 className="truncate text-xs font-bold text-slate-200 transition-colors group-hover:text-orange-400 sm:text-[13px]">
          {character.name}
        </h3>
      </div>
    </Link>
  );
}

export default CharacterCard;
