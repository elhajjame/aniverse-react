import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrendingSection from "../components/TrendingSection";
import {
  getAnimeById,
  getCharacters,
  getSeasonalAnime,
  getTopAnime,
} from "../api/jikan";
import { useAnime } from "../context/animeContext";

function Home() {
  const { topAnime, fetchTopAnime } = useAnime();
  // console.log(useAnime());
  console.log(topAnime);
  console.log("top anime: ", topAnime);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchTopAnime();
        console.log("dataaaaaaaaaaaaa", topAnime);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
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
