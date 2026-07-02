import { useEffect } from "react";
import { useAnime } from "../../context/animeContext";
import AnimeCard from "./AnimeCard";

export default function SeasonalAnime() {
  const { seasonalAnime, fetchSeasonalAnime } = useAnime();
  useEffect(() => {
    fetchSeasonalAnime();
  }, []);

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
