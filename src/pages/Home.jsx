import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import SeasonalAnime from "../components/home/SeasonalAnime";
import TrendingSection from "../components/home/TrendingSection";

function Home() {
  return (
    <>
      <Hero />
      <Header title="Trending Now" description="top-rated anime right now" />
      <TrendingSection />
      <Header title="Seasonal Anime" description="Currently airing" />
      <SeasonalAnime />
    </>
  );
}

export default Home;
