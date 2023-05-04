import axios from 'axios';

export const fetchShows = async () => {
  const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
  return response.data;
}
