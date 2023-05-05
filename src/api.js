const BASE_URL = 'https://api.tvmaze.com/search/shows?q=all';

export const fetchShows = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
};
