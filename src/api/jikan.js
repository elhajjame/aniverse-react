import client from "./client";

export const getTopAnime = async () => {
  const { data } = await client.get(`/top/anime`);
  return data.data.slice(0, 6);
};

export const getSeasonalAnime = async () => {
  const { data } = await client.get("/seasons/now");
  return data.data.slice(0, 6);
};

export const getCharacters = async () => {
  const { data } = await client.get("/top/characters");
  return data.data;
};

export const getAnimeById = async (id) => {
  const { data } = await client.get(`/anime/${id}`);
  return data.data;
};

export const getCharacterById = async (id) => {
  const { data } = await client.get(`/anime/${id}/full`);
  return data.data;
};

// export const
