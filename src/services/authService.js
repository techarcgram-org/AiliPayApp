import axios from './axiosConfig';

// Example API service for user-related requests
export const login = async (userData) => {
  try {
    const response = await axios.post('/auth/login', userData);
    return response;
  } catch (error) {
    // Handle error
    console.error('Login Error:', error.response.status, error.response.data);
    return error.response;
  }
};

export const createPassword = async (userId, userData) => {
  try {
    const response = await axios.post(`/auth/createNewPassword/${userId}`, userData);
    return response;
  } catch (error) {
    // Handle error
    console.error('Could not create password:', error.response.status, error.response.data);
    return error.response;
  }
};

export const sendVerificationEmail = async (email) => {
  try {
    const response = await axios.post('/auth/sendEmailVerificationCode', {
      email
    });
    return response;
  } catch (error) {
    // Handle error
    console.error("Couldn't send email:", error.response.status, error.response.data);
    return error.response;
  }
};

export const verifyEmailSecret = async (userData) => {
  try {
    const response = await axios.post('/auth/verifyEmailSecret', userData);
    return response;
  } catch (error) {
    // Handle error
    console.error("Couldn't verify email:", error.response.status, error.response.data);
    return error.response;
  }
};

export const validateAccessToken = async (token) => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await axios.get('/auth/');
    return response;
  } catch (error) {
    // Handle error
    console.error("Couldn't validate token:", error.response.status, error.response.data);
    return error.response;
  }
};
