function LibrarySectionHeader({ title }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-900 pb-2">
      <h2 className="flex items-center gap-2 text-lg font-black uppercase tracking-wider text-white">
        <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
        {title}
      </h2>
    </div>
  );
}

export default LibrarySectionHeader;
