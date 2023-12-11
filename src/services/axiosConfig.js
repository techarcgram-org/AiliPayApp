import axios from 'axios';
import { API_ENDPOINT } from '@env';
// Set default base URL
axios.defaults.baseURL = API_ENDPOINT;
// Set default headers
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axios;
