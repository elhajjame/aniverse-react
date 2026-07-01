import { createContext, useContext, useState } from "react";
export const AnimeContext = createContext();
import {
  getAnimeById,
  getCharacterById,
  getCharacters,
  getSeasonalAnime,
  getTopAnime,
} from "../api/jikan";

export default function AnimeProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [topAnime, setTopAnime] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [seasonalAnime, setSeasonalAnime] = useState([]);
  const [characters, setCharacter] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

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

  return (
    <AnimeContext.Provider
      value={{
        seasonalAnime,
        characters,
        selectedCharacter,
        selectedAnime,
        topAnime,
        loading,

        fetchTopAnime,
        fetchAnimeById,
        fetchSeasonalAnime,
        fetchCharacter,
        fetchCharacterById,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
}
export const useAnime = () => useContext(AnimeContext);
