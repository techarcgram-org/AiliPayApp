import axios from "./axiosConfig";

// Example API service for user-related requests
export const login = async () => {
  try {
    const response = await axios.post("/auth");
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const createPassword = async (userData) => {
  try {
    const response = await axios.post("/users", userData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error creating user:", error);
    throw error;
  }
};

export const sendVerificationEmail = async (userData) => {
  try {
    const response = await axios.post("/users", userData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error creating user:", error);
    throw error;
  }
};

export const verifyEmailSecret = async (userData) => {
  try {
    const response = await axios.post("/auth", userData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error creating user:", error);
    throw error;
  }
};