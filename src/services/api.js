import axios from "axios";
import { TOKEN_KEY } from "../context/AuthContext";

const api = axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Accept':'application/json'
    },
    baseURL: 'http://localhost:3000/',
});


api.interceptors.request.use((config) => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {        
        config.headers.Authorization = `Bearer ${token}`;
        //console.log(token);
        
    }
    return config;
});

export default api;