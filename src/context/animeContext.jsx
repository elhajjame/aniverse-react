import { createContext, useContext, useEffect, useState } from "react";
export const AnimeContext = createContext();
import {
  getAllAnime,
  getAnimeById,
  getCharacterById,
  getCharacters,
  getGenres,
  getSeasonalAnime,
  getTopAnime,
  searchAnime,
} from "../api/jikan";
import { addFavorite, getFavorite, removeFavorite } from "../api/favorites";

export default function AnimeProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [AllAnime, setAllAnime] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [seasonalAnime, setSeasonalAnime] = useState([]);
  const [characters, setCharacter] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [genres, setGenres] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const fetchAllAnime = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllAnime();
      setAllAnime(data);
    } catch (err) {
      setError(err.message || "Failed to fetch anime.");
    } finally {
      setLoading(false);
    }
  };

  const fetchTopAnime = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getTopAnime();
      setTopAnime(data);
    } catch (err) {
      setError(err.message || "Failed to fetch anime.");
    } finally {
      setLoading(false);
    }
  };

  const fetchAnimeById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAnimeById(id);
      setSelectedAnime(data);
    } catch (err) {
      setError(err.message || "Failed to fetch anime.");
    } finally {
      setLoading(false);
    }
  };

  const fetchSeasonalAnime = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getSeasonalAnime();
      setSeasonalAnime(data);
    } catch (err) {
      setError(err.message || "Failed to fetch anime.");
    } finally {
      setLoading(false);
    }
  };

  const fetchCharacter = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCharacters();
      setCharacter(data);
    } catch (err) {
      setError(err.message || "Failed to fetch anime.");
    } finally {
      setLoading(false);
    }
  };

  const fetchCharacterById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCharacterById(id);
      setSelectedCharacter(data);
    } catch (err) {
      setError(err.message || "Failed to fetch anime.");
    } finally {
      setLoading(false);
    }
  };

  const fetchSearchAnime = async (query, genre) => {
    const data = await searchAnime(query, genre);

    setAllAnime(data);
  };

  async function fetchFavorites() {
    try {
      const data = await getFavorite();
      setFavorites(data);
    } catch (err) {
      console.log(err);
    }
  }

  // add anime to fav

  async function addFavorites(anime) {
    const exist = favorites.some((fav) => fav.id === anime.id);
    if (exist) return;
    try {
      const saveAnime = await addFavorites(anime);
      setFavorites((prev) => [...prev, saveAnime]);
    } catch (error) {
      console.error(error);
    }
  }

  async function unFavoritesAnime(id) {
    try {
      await removeFavorite(id);

      setFavorites((perv) => perv.filter((anime) => anime.mal_id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  function isFavorite(id) {
    return favorites.some((anime) => anime.id === id);
  }

  async function toggleFavorite(anime) {
    if (isFavorite(anime.id)) {
      await removeFavorite(anime.id);

      setFavorites((prev) => prev.filter((fav) => fav.id !== anime.id));
    } else {
      const savedAnime = await addFavorite(anime);

      setFavorites((prev) => [...prev, savedAnime]);
    }
  }

  return (
    <AnimeContext.Provider
      value={{
        AllAnime,
        seasonalAnime,
        characters,
        selectedCharacter,
        selectedAnime,
        topAnime,
        loading,
        error,
        genres,
        favorites,

        fetchAllAnime,
        fetchTopAnime,
        fetchAnimeById,
        fetchSeasonalAnime,
        fetchCharacter,
        fetchCharacterById,
        fetchSearchAnime,
        fetchFavorites,
        addFavorites,
        unFavoritesAnime,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
}
export const useAnime = () => useContext(AnimeContext);
