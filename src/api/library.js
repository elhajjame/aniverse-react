import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export async function getLibrary() {
  const { data } = await axios.get(`${URL}/library`);
  return data;
}

export async function addLibrary(anime) {
  console.log("anime on lib", anime);
  const { data } = await axios.post(`${URL}/library`, anime);
  console.log("on lib nn", data);
  return data;
}

export async function patchStatus(id, update) {
  const { data } = await axios.patch(`${URL}/library/${id}`, update);
  return data;
}