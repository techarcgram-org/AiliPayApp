import axios from 'axios';
import { API_ENDPOINT } from '@env';
// Set default base URL
axios.defaults.baseURL = API_ENDPOINT;
console.log('process', API_ENDPOINT);
// axios.defaults.baseURL = 'http://192.168.100.4:3001';

// Set default headers
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axios;
