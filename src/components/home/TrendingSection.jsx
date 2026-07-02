import { useEffect } from "react";
import { useAnime } from "../../context/animeContext";
import AnimeCard from "./AnimeCard";

export default function TrendingSection() {
  const { topAnime, fetchTopAnime } = useAnime();
  useEffect(() => {
    fetchTopAnime();
  }, []);

  return (
    <section>
      <div className="pb-15 grid grid-cols-12 gap-4">
        {topAnime.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </section>
  );
}
