import axios from 'axios'; // You can use axios or fetch for HTTP requests

const API_URL = 'http://your-api-url.com'; // Replace with your API URL

// Function to get the currently logged-in user
export const getLoggedInUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/user/logged-in`);
    return response.data;
  } catch (error) {
    console.error('Error fetching logged-in user:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

// Function to apply for a loan
export const applyForLoan = async (userId, loanData) => {
  try {
    const response = await axios.post(`${API_URL}/loans/apply`, { userId, ...loanData });
    return response.data;
  } catch (error) {
    console.error('Error applying for loan:', error);
    throw error;
  }
};

// Function to get loan history for a user
export const getLoanHistory = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/loans/history`, { params: { userId } });
    return response.data;
  } catch (error) {
    console.error('Error fetching loan history:', error);
    throw error;
  }
};
