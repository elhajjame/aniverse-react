import AnimeCard from "./AnimeCard";


export default function TrendingSection() {
  const animeList = [
    {
      mal_id: 52991,
      title: "Sousou no Frieren",
      score: 9.3,
      episodes: 28,
      year: 2023,
      images: {
        jpg: {
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1015/138025.jpg",
        },
      },
    },
    {
      mal_id: 5114,
      title: "Fullmetal Alchemist: Brotherhood",
      score: 9.1,
      episodes: 64,
      year: 2009,
      images: {
        jpg: {
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1208/94745.jpg",
        },
      },
    },
    {
      mal_id: 9253,
      title: "Steins;Gate",
      score: 9.1,
      episodes: 24,
      year: 2011,
      images: {
        jpg: {
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1935/127974.jpg",
        },
      },
    },
    {
      mal_id: 1706,
      title: "Steel Ball Run",
      score: 9.1,
      episodes: null,
      year: null,
      images: {
        jpg: {
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/3/159383.jpg",
        },
      },
    },
    {
      mal_id: 57173,
      title: "Chainsaw Man Movie: Reze-hen",
      score: 9.1,
      episodes: 1,
      year: 2026,
      images: {
        jpg: {
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1930/140224.jpg",
        },
      },
    },
    {
      mal_id: 54857,
      title: "Re:ZERO kara Hajimeru Isekai Seikatsu 4th Season",
      score: 9.2,
      episodes: 19,
      year: 2026,
      images: {
        jpg: {
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1375/141381.jpg",
        },
      },
    },
  ];
  return (
    <section>
      
      <div className="pb-15 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {animeList.map((anime) => (
          <AnimeCard anime={anime} />
        ))}
      </div>
    </section>
  );
}
