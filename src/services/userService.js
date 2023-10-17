import axios from './axiosConfig';

// Example API service for user-related requests
export const getUsers = async () => {
  try {
    const response = await axios.get('/users');
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const searchUserByEmployeeId = async (employeeId) => {
  await sleep(3000);
  try {
    // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.get(`users/by-employee-id`, {
      params: {
        employeeId: employeeId
      }
    });

    return response;
  } catch (error) {
    // Handle error
    console.error("Couldn't find user:", error.response.status, error.response.data);
    return error.response;
  }
};

export const searchUserByEmployeeEmail = async (employeeEmail) => {
  await sleep(3000);
  try {
    // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.get(`users/by-employee-email`, {
      params: {
        employeeEmail: employeeEmail
      }
    });

    return response;
  } catch (error) {
    // Handle error
    console.error("Couldn't find user:", error.response.status, error.response.data);
    return error.response;
  }
};

export const searchUserByEmployeePhone = async (employeeEmail) => {
  await sleep(3000);
  try {
    // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.get(`users/by-employee-email`, {
      params: {
        employeeEmail: employeeEmail
      }
    });

    return response;
  } catch (error) {
    // Handle error
    console.error("Couldn't find user:", error.response.status, error.response.data);
    return error.response;
  }
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
