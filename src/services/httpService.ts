import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 300000,
});

http.defaults.params = {};
http.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

export default http;
