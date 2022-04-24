import axios from "axios";
import https from "https";
import { API_URL } from "@constants/index";

export const api = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: process.env.NODE_ENV === "production",
  }),
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});
