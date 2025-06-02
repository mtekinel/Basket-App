import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("API Error", error.response);
    throw error;
  }
);

export default api;
