import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID BdheO7kGuQ0F_vzPUhvFNIXLguyL_gD8NytauZDwr20",
  },
});
