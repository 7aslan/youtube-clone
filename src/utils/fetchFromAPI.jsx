import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  method: "GET",
  params: {
    maxResults: "50",
    order: "date",
  },
  headers: {
    "x-rapidapi-key": "8996fc2622msha1200be8c3af7d4p143ba4jsnf2a2ff47612f",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
};
