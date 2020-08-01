import axios from 'axios';

const api = axios.create({
  baseURL: 'https://server-gaia.mybluemix.net/',
});

export default api;
