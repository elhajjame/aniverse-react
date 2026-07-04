import { useEffect } from "react";
import FavoriteList from "../components/favorite/FavoriteList";
import PageHeader from "../components/PageHeader";
import { useAnime } from "../context/animeContext";
import Loading from "../components/errorHandling/Loading";
import Error from "../components/errorHandling/Error";
import EmptyFavorites from "../components/favorite/EmptyFavorites";

function FavoritePage() {
  const { loading, error, favorites, fetchFavorites } = useAnime();
  console.log("tdgbhjsk", favorites);
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
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Anime Catalog"
        description="Explore and filter thousands of titles across multiple genres"
      />
      {favorites.length === 0 ? (
        <EmptyFavorites />
      ) : (
        <FavoriteList favorites={favorites} />
      )}
    </div>
  );
}

export default FavoritePage;
