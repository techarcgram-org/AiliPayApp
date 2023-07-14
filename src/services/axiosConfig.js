import axios from 'axios';
import { API_ENDPOINT } from '@env';
// Set default base URL
axios.defaults.baseURL = "https://airlipayapi-lj5jh6d6pa-ue.a.run.app";
console.log('process', "https://airlipayapi-lj5jh6d6pa-ue.a.run.app");
// axios.defaults.baseURL = 'http://192.168.100.4:3001';

// Set default headers
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axios;
