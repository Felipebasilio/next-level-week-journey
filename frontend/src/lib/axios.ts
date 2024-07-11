import axios from "axios";

export const api = axios.create({
  // endereço do nosso backend
  baseURL: "http://localhost:3333",
});