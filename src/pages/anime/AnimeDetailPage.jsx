import { ArrowLeft } from "lucide-react";
import AnimeSidebar from "../../components/animeDetails/AnimeSidebar";
import AnimeInfo from "../../components/animeDetails/AnimeInfo";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAnime } from "../../context/animeContext";
// import AnimeInfo from "../components/detail/AnimeInfo";

function AnimeDetailPage() {
  const { id } = useParams();
  const { loading, selectedAnime, fetchAnimeById } = useAnime();
  console.log(id);

  useEffect(() => {
    fetchAnimeById(id);
  }, [id]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!selectedAnime) {
    return <p>Anime not found.</p>;
  }
  return (
    <section className="space-y-10 animate-fade-in">
      <div>
        <a
          href="/anime"
          className="group inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Catalog
        </a>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
        <AnimeSidebar anime={selectedAnime} />
        <AnimeInfo anime={selectedAnime} />
      </div>
    </section>
  );
}

export default AnimeDetailPage;
