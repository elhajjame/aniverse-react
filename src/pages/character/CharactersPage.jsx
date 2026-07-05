import { useEffect } from "react";
import CharacterCard from "../../components/characters/CharacterCard";
import { useAnime } from "../../context/animeContext";
import Loading from "../../components/errorHandling/Loading";

function CharactersPage() {
  const { characters, fetchCharacter, loading, error } = useAnime();

  useEffect(() => {
    fetchCharacter();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    <Error />;
  }
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharactersPage;
