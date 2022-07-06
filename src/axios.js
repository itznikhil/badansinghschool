import axios from "axios";
// Create a new instance of axios
import baseURL from "./baseUrl.js";

const client = axios.create({
  baseURL: baseURL + "/api/v1",
});

export { client };
