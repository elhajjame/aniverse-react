import { LoaderCircle } from "lucide-react";

function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <LoaderCircle className="h-10 w-10 animate-spin text-orange-500" />

        <div className="text-center">
          <h2 className="text-lg font-semibold text-white">Loading Anime...</h2>
          <p className="text-sm text-slate-400">
            Please wait while we fetch the details.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loading;
