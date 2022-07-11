import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000,
  headers: {
    Authorization: `bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
});
