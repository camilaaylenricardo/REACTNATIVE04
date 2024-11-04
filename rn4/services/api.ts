import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8082/api', // Cambia la URL base si es necesario
  timeout: 10000,
});

export default api;