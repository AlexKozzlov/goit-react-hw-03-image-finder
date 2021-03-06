import axios from "axios";

const buseURL = "https://pixabay.com/api/";
const key = "18823692-f69edaabddb6a9bc41c7d0ed3";
const per_page = "12";

const feachImgQuery = (query, page) => {
  return axios
    .get(
      `${buseURL}?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${per_page}`
    )
    .then((response) => response.data.hits);
};

export default {
  feachImgQuery,
};
