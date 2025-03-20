import axios, { AxiosInstance } from "axios";
import config from "@/config";

const token: string | null = localStorage.getItem("iap-token");

const instance: AxiosInstance = axios.create({
  baseURL: config.BASE_URL + "/api",
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
    "Content-Type": "application/json",
  },
});

export default instance;
