import axios from "axios";


const API_KEY = "xj4BT701N2L5NCNq0TYQInR3RbeIHdktl3IKzKDZZ0I";
const BASE_URL = "https://api.unsplash.com/";

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(`${BASE_URL}search/photos`, {
    params: {
      query,
      page,
      per_page: 15,
      client_id: API_KEY,
      orientation: "landscape",
    },
  });
  return response.data;
};
