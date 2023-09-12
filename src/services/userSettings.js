import axios from './axiosConfig';

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

  export const ChangePassword = async (data) => {
    try {
      const response = await axios.post('api endpoint', data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export const ChangeName = async (data) => {
    try {
      const response = await axios.post('api endpoint', data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  
  export const ChangeEmail = async (data) => {
    try {
      const response = await axios.post('api endpoint', data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  
  export const ChangeNumber = async (data) => {
    try {
      const response = await axios.post('api endpoint', data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  
  export const ChangeLanguage = async (data) => {
    try {
      const response = await axios.post('api endpoint', data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }