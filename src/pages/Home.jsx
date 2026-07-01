import Header from "../components/Header";
import Hero from "../components/Hero";
import TrendingSection from "../components/TrendingSection";

function Home() {
  return (
    <div>
      <Hero />
      <Header title="Trending Now" description="top-rated anime right now" />
      <TrendingSection />
      <Header title="Seasonal Anime" description="Currently airing" />
      <TrendingSection />
    </div>
  );
}

export default Home;
