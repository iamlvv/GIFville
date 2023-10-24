import axios from "axios";
import {
  API_KEY,
  API_URL_GET_GIF_DETAIL,
  API_URL_GET_TRENDING_GIFS,
  API_URL_SEARCH_TRENDING_GIFS,
} from "../constants/trendingConstants";

// Get Trending GIFs
type getTrendingGifsProps = {
  limit: number;
  offset: number;
  setState: React.Dispatch<React.SetStateAction<never[]>>;
};
const getTrendingGifs = async (props: getTrendingGifsProps) => {
  try {
    const response = await axios.get(API_URL_GET_TRENDING_GIFS, {
      params: {
        api_key: API_KEY,
        limit: props.limit,
        offset: props.offset,
      },
    });
    props.setState(response.data.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Get GIF Detail by ID
type getGifDetailProps = {
  id: string | undefined;
  setState: React.Dispatch<any>;
};
const getGifDetail = async (props: getGifDetailProps) => {
  try {
    const response = await axios.get(API_URL_GET_GIF_DETAIL + props.id, {
      params: {
        api_key: API_KEY,
      },
    });
    props.setState(response.data.data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Search Trending GIFs by query, limit and offset
type SearchTrendingGifsProps = {
  query: string;
  limit: number;
  offset: number;
  setState: React.Dispatch<any>;
};
const searchTrendingGifs = async (props: SearchTrendingGifsProps) => {
  try {
    const response = await axios.get(API_URL_SEARCH_TRENDING_GIFS, {
      params: {
        api_key: API_KEY,
        q: props.query,
        limit: props.limit,
        offset: props.offset,
      },
    });
    props.setState(response.data.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getTrendingGifs, getGifDetail, searchTrendingGifs };
