import axios from 'axios';

const configs = { 
    baseURL: "https://desafio-mv-api.herokuapp.com/api"
}

const api = axios.create(configs);

export default api