function CastCard({ character }) {
  return (
    <a
      href={`/characters/${character.id}`}
      className="group flex items-center gap-3 rounded-xl border border-slate-900 bg-[#0c0b16] p-2.5 transition hover:border-orange-500/30"
    >
      <img
        src={character.image}
        alt={character.name}
        className="h-11 w-11 rounded-lg object-cover"
      />

      <div className="min-w-0">
        <p className="truncate text-[11px] font-bold text-slate-200 transition group-hover:text-orange-400">
          {character.name}
        </p>

        <p className="mt-0.5 truncate text-[9px] font-medium text-slate-500">
          {character.role}
        </p>
      </div>
    </a>
  );
}

export default CastCard;
