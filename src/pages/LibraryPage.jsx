import { useEffect } from "react";
import LibraryCard from "../components/libraryComponents/LibraryCard";
import LibrarySectionHeader from "../components/libraryComponents/LibrarySectionHeader";
import { useAnime } from "../context/animeContext";

function LibraryPage() {
  const { library, fetchLibrary } = useAnime();
  console.log("testt lindhn", library);
  useEffect(() => {
    fetchLibrary();
  }, []);

  const watching = library.filter((item) => item.status === "watching");
  const planToWatch = library.filter((item) => item.status === "plan to watch");
  const completed = library.filter((item) => item.status === "completed");
  return (
    <section className="space-y-12">
      <div className="space-y-5">
        <LibrarySectionHeader title="Watching" />

        <div className="grid grid grid-cols-12 gap-5">
          {watching.map((item) => (
            <LibraryCard item={item} key={item.mal_id} />
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <LibrarySectionHeader title="Plan To Watch" />

        <div className="grid grid grid-cols-12 gap-5">
          {planToWatch.map((item) => (
            <LibraryCard item={item} key={item.mal_id} />
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <LibrarySectionHeader title="Completed" />

        <div className="grid grid grid-cols-12 gap-5">
          {completed.map((item) => (
            <LibraryCard item={item} key={item.mal_id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LibraryPage;
