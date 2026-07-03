import { createContext, useContext, useState } from "react";
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

        fetchAllAnime,
        fetchTopAnime,
        fetchAnimeById,
        fetchSeasonalAnime,
        fetchCharacter,
        fetchCharacterById,
        fetchSearchAnime,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
}
export const useAnime = () => useContext(AnimeContext);
