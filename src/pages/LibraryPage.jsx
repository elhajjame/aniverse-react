import LibraryCard from "../components/libraryComponents/LibraryCard";
import LibrarySectionHeader from "../components/libraryComponents/LibrarySectionHeader";

function LibraryPage() {
  return (
    <section className="space-y-12">
      <div className="space-y-5">
        <LibrarySectionHeader title="Watching" />

        <div className="grid grid grid-cols-12 gap-5">
          <LibraryCard />
          <LibraryCard />
          <LibraryCard />
          <LibraryCard />
        </div>
      </div>

      <div className="space-y-5">
        <LibrarySectionHeader title="Plan To Watch" />

        <div className="grid grid grid-cols-12 gap-5">
          <LibraryCard />
          <LibraryCard />
          <LibraryCard />
        </div>
      </div>

      <div className="space-y-5">
        <LibrarySectionHeader title="Completed" />

        <div className="grid grid grid-cols-12 gap-5">
          <LibraryCard />
          <LibraryCard />
          <LibraryCard />
          <LibraryCard />
          <LibraryCard />
          <LibraryCard />
        </div>
      </div>
    </section>
  );
}

export default LibraryPage;
