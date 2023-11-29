import axios from './axiosConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserBalance = async () => {
  const token = await AsyncStorage.getItem('access_token');
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await axios.get(`airlipay-balance/`);
    return response;
  } catch (error) {
    // Handle error
    console.error(
      "Couldn't get user airlipay balance:",
      error.response.status,
      error.response.data
    );
    return error.response;
  }
};

export const getUserEarlyPayments = async (data) => {
  const token = await AsyncStorage.getItem('access_token');
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await axios.get(`airlipay-balance/transactions`, data);
    return response;
  } catch (error) {
    // Handle error
    console.error(
      "Couldn't get user airlipay balance:",
      error.response.status,
      error.response.data
    );
    return error.response;
  }
};

export const withdraw = async (data) => {
  const token = await AsyncStorage.getItem('access_token');
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await axios.post(`airlipay-balance/withdraw`, data);
    return response;
  } catch (error) {
    // Handle error
    console.error("Error couldn't make withdrawal", error.response.status, error.response.data);
    return error.response;
  }
};
