import ListAnime from "../../components/anime/ListAnime";
import SearchComponent from "../../components/anime/SearchComponent";
import PageHeader from "../../components/PageHeader";


function AnimeList() {


  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Anime Catalog"
        description="Explore and filter thousands of titles across multiple genres"
      />
      <SearchComponent />
      <ListAnime />
    </div>
  );
}

export default AnimeList;
