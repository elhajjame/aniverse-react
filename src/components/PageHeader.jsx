function PageHeader({ title, description }) {
  return (
    <div className="border-b border-slate-900 pb-4">
      <h1 className="text-3xl font-black uppercase tracking-wider text-white">
        {title}
      </h1>

      <p className="mt-1 text-xs text-slate-500">{description}</p>
    </div>
  );
}

export default PageHeader;
