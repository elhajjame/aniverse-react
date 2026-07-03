import { useEffect } from "react";
import { useAnime } from "../../context/animeContext";
import AnimeCard from "../home/AnimeCard";

export default function ListAnime() {
  const { AllAnime, fetchAllAnime } = useAnime();
  useEffect(() => {
    fetchAllAnime();
  }, []);

  return (
    <section>
      <div className="pb-15 grid grid-cols-12 gap-4">
        {AllAnime.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </section>
  );
}
