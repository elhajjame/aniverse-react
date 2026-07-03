import { useEffect } from "react";
import { useAnime } from "../../context/animeContext";
import AnimeCard from "../home/AnimeCard";
import Loading from "../errorHandling/Loading";
import Error from "../errorHandling/Error";
import FavoriteCard from "./FavoriteCard";

export default function FavoriteList() {
  const { loading, error, AllAnime, fetchAllAnime } = useAnime();
  useEffect(() => {
    fetchAllAnime();
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
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
      </div>
    </section>
  );
}
