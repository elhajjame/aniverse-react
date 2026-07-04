import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export async function getFavorite() {
  const { data } = await axios.get(`${URL}/favorites`);
  return data;
}

export async function addFavorite(anime) {
  const { data } = await axios.post(`${URL}/favorites`, anime);
  return data;
}

export async function removeFavorite(id) {
  const { data } = await axios.delete(`${URL}/favorites/${id}`);
  return data;
}
