import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  headers: {
    "Content-type": "application/json"
  }
});