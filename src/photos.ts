import axios from "axios";

const UNSPLASH_API_KEY: string = "xj4BT701N2L5NCNq0TYQInR3RbeIHdktl3IKzKDZZ0I";

axios.defaults.baseURL = "https://api.unsplash.com/";

interface RequestParams {
  orientation: string;
  per_page: number;
  client_id: string;
}

axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
  client_id: UNSPLASH_API_KEY,
} as RequestParams;

export interface ImageData {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
  likes: number;
}

export interface ImagesResponse {
  results: ImageData[];
  total: number;
  total_pages: number;
}

export const fetchImages = async (
  searchQuery: string,
  currentPage: number
): Promise<ImagesResponse> => {
  const { data } = await axios.get<ImagesResponse>(
    `search/photos?query=${searchQuery}&page=${currentPage}`
  );

  return data;
};
