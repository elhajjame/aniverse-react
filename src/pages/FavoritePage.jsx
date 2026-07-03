import FavoriteList from "../components/favorite/FavoriteList";
import PageHeader from "../components/PageHeader";

function FavoritePage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Anime Catalog"
        description="Explore and filter thousands of titles across multiple genres"
      />
      <FavoriteList />
    </div>
  );
}

export default FavoritePage;