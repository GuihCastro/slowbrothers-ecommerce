import axios from "axios";

const api = axios.create({
    baseURL: 'https://www.deckofcardsapi.com/api/deck',
});

export default api;