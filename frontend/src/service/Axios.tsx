import axios, { AxiosInstance } from "axios";

const token: string | null = localStorage.getItem("iap-token");

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
    "Content-Type": "application/json",
  },
});

export default instance;
