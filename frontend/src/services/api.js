// src/services/api.js
import axios from 'axios';

// Set up the base URL for the API
const API_BASE_URL = 'https://unreadechoes.onrender.com/api';

// Function to submit a message
export const submitMessage = async (name, messageData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/messages/${name}`, messageData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('An error occurred');
  }
};

// Function to get all messages from a specific collection
export const getAllMessages = async (name) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/messages`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('An error occurred');
  }
};

export const searchMessagesByName = async (name) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/messages/${name}`);
      return response.data;
    } catch (error) {
      console.error('Error searching messages:', error);
      throw error;
    }
  };
