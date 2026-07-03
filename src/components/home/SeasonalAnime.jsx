import { useEffect } from "react";
import { useAnime } from "../../context/animeContext";
import AnimeCard from "./AnimeCard";
import Loading from "../errorHandling/Loading";
import Error from "../errorHandling/Error";

export default function SeasonalAnime() {
  const { loading, error, seasonalAnime, fetchSeasonalAnime } = useAnime();
  useEffect(() => {
    fetchSeasonalAnime();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <section>
      <div className="pb-15 grid grid-cols-12 gap-4">
        {seasonalAnime.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </section>
  );
}
