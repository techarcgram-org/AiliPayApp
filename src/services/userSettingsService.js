import axios from './axiosConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const addNewBankAccount = async (userData) => {
  await sleep(3000);
  try {
    // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.post(`account-settings/add-user-bank-account`, userData);
    return response;
  } catch (error) {
    // Handle error
    console.error("Couldn't add bank account:", error.response.status, error.response.data);
    return error.response;
  }
};

export const getBanks = async () => {
  await sleep(3000);
  try {
    // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.get(`users/list-banks`);
    return response;
  } catch (error) {
    // Handle error
    console.error("Couldn't get banks:", error.response.status, error.response.data);
    return error.response;
  }
};

export const getUserBanks = async () => {
  const token = await AsyncStorage.getItem('access_token');
  await sleep(3000);
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await axios.get(`users/list-user-banks`);
    return response;
  } catch (error) {
    // Handle error
    console.error("Couldn't get banks:", error.response.status, error.response.data);
    return error.response;
  }
};

export const addMomoAccount = async (data) => {
  const token = await AsyncStorage.getItem('access_token');
  await sleep(3000);
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await axios.post(`account-settings/add-user-momo-account`, data);
    return response;
  } catch (error) {
    // Handle error
    console.error("Couldn't add new momo account:", error.response.status, error.response.data);
    return error.response;
  }
};

export const getMomoAccounts = async () => {
  const token = await AsyncStorage.getItem('access_token');
  await sleep(3000);
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await axios.get(`account-settings/list-user-momo-accounts`);
    return response;
  } catch (error) {
    // Handle error
    console.error("Couldn't get user momo accounts:", error.response.status, error.response.data);
    return error.response;
  }
};

export const getUserAccountSettings = async () => {
  const token = await AsyncStorage.getItem('access_token');
  await sleep(3000);
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await axios.get(`account-settings/get-user-account-settings`);
    return response;
  } catch (error) {
    // Handle error
    console.error(
      "Couldn't get user account settings:",
      error.response.status,
      error.response.data
    );
    return error.response;
  }
};

export const updateAccountSettings = async (data) => {
  const token = await AsyncStorage.getItem('access_token');
  await sleep(3000);
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await axios.patch(`account-settings/`, data);
    return response;
  } catch (error) {
    // Handle error
    console.error(
      "Couldn't get user account settings:",
      error.response.status,
      error.response.data
    );
    return error.response;
  }
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
