import axios from "axios";
// Create a new instance of axios
import baseURL from "./baseUrl.js";

const client = axios.create({
  baseURL: baseURL + "/api/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("auth")}`,
    Accept: "application/json",
  },
});

export { client };
