import axios from "axios";

// Set default base URL
axios.defaults.baseURL = "http://192.168.100.4:3001/";

// Set default headers
axios.defaults.headers.common["Content-Type"] = "application/json";

export default axios;