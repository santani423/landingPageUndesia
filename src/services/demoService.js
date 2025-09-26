import axios from "axios";

const API_URL = "http://localhost:8000/api"; // ganti sesuai URL Laravel

export const getDemos = async () => {
  try {
    const response = await axios.get(`${API_URL}/demo`);
    return response.data;
  } catch (error) {
    throw error.response || error;
  }
};
