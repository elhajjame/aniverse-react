import { useAnime } from "../../context/animeContext";

import Loading from "../errorHandling/Loading";
import Error from "../errorHandling/Error";
import FavoriteCard from "./FavoriteCard";
import { useEffect } from "react";

export default function FavoriteList() {
  const { loading, error, favorites, fetchFavorites } = useAnime();

  useEffect(() => {
    fetchFavorites();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!favorites) {
    return <Error message={error} />;
  }

  return (
    <section>
      <div className="pb-15 grid grid-cols-12 gap-4">
        {favorites.map((anime) => (
          <FavoriteCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </section>
  );
}
