function Error({ message }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border border-orange-500/20 bg-[#0c0b16] p-8 text-center shadow-lg">
        <h2 className="text-2xl font-bold text-white">Something went wrong</h2>

        <p className="mt-3 text-slate-400">{message}</p>
      </div>
    </div>
  );
}

export default Error;
