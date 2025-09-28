import axios from "axios";

const API_URL = "http://localhost:8000/api"; // ganti sesuai URL Laravel
// const API_URL = "https://banksampah.undesia.com/api"; // ganti sesuai URL Laravel

export const getDemos = async () => {
  try {
    const response = await axios.get(`${API_URL}/demo`);
    return response.data;
  } catch (error) {
    throw error.response || error;
  }
};
export const getTestimonials = async () => {
  try {
    const response = await axios.get(`${API_URL}/testimonials`);
    return response.data;
  } catch (error) {
    throw error.response || error;
  }
};


export const getThemes = async (page = 1, perPage = 10) => {
  try {
    const response = await axios.get(`${API_URL}/themes`, {
      params: {
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response || error;
  }
};


export const getThemeVideos = async (page = 1, perPage = 10) => {
  try {
    const response = await axios.get(`${API_URL}/themeVideos`, {
      params: {
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response || error;
  }
};
