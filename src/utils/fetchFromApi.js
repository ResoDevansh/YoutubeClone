import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    // q: "sports",
    // part: "snippet,id",
    regionCode: "US",
    maxResults: "50",
    order: "date",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${url}`, options);
    return data.items;
    // return axios.get(`${BASE_URL}/${url}`, options);
  } catch (error) {
    console.error(error);
  }
};
