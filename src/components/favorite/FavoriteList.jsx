
import { useAnime } from "../../context/animeContext";

import Loading from "../errorHandling/Loading";
import Error from "../errorHandling/Error";
import FavoriteCard from "./FavoriteCard";

export default function FavoriteList() {
  const { loading, error, favorites } = useAnime();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error} />;
  }
  return (
    <section>
      <div className="pb-15 grid grid-cols-12 gap-4">
        {favorites.map((anime) => (
          <FavoriteCard key={anime.id} anime={anime} />
        ))}
      </div>
    </section>
  );
}
