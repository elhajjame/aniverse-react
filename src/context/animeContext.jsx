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
  const [AllAnime, setAllAnime] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [seasonalAnime, setSeasonalAnime] = useState([]);
  const [characters, setCharacter] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [genres, setGenres] = useState([]);

  const fetchAllAnime = async () => {
    setLoading(true);
    try {
      const data = await getAllAnime();
      setAllAnime(data);
    } finally {
      setLoading(false);
    }
  };

  const fetchTopAnime = async () => {
    setLoading(true);
    try {
      const data = await getTopAnime();
      setTopAnime(data);
    } finally {
      setLoading(false);
    }
  };

  const fetchAnimeById = async (id) => {
    setLoading(true);
    try {
      const data = await getAnimeById(id);
      setSelectedAnime(data);
    } finally {
      setLoading(false);
    }
  };

  const fetchSeasonalAnime = async () => {
    setLoading(true);

    try {
      const data = await getSeasonalAnime();
      setSeasonalAnime(data);
    } finally {
      setLoading(false);
    }
  };

  const fetchCharacter = async () => {
    setLoading(true);
    try {
      const data = await getCharacters();
      setCharacter(data);
    } finally {
      setLoading(false);
    }
  };

  const fetchCharacterById = async (id) => {
    setLoading(true);
    try {
      const data = await getCharacterById(id);
      setSelectedCharacter(data);
    } finally {
      setLoading(false);
    }
  };

  const fetchGenres = async () => {
    const data = await getGenres();
    setGenres(data);
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
        genres,

        fetchAllAnime,
        fetchTopAnime,
        fetchAnimeById,
        fetchSeasonalAnime,
        fetchCharacter,
        fetchCharacterById,
        fetchGenres,
        fetchSearchAnime,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
}
export const useAnime = () => useContext(AnimeContext);
