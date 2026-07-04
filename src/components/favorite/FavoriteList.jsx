import FavoriteCard from "./FavoriteCard";

export default function FavoriteList({ favorites }) {
  console.log(favorites);
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
