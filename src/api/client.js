import axios from "axios";

const client = axios.create({
  baseURL: "https://api.jikan.moe/v4",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;
