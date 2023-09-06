import axios from './axiosConfig';

export const addMobileMoney = async (phone_number) => {
  await sleep(3000);
  try {
    // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.post(`account-settings/add-user-momo-account`, {
      phone_number
    });
    return response;
  } catch (error) {
    // Handle error
    console.error("Couldn't add mobile money:", error.response.status, error.response.data);
    return error.response;
  }
};

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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
