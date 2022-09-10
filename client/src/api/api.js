import axios from 'axios';

const base_api = axios.create({ baseURL: 'http://localhost:5000/' });

export const get_db = () => base_api.get('/');