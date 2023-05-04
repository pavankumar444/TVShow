import React, { useState, useEffect } from 'react';
import { fetchShows } from '../api';

const ShowsList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getShows = async () => {
      const data = await fetchShows();
      setShows(data);
    }
    getShows();
  }, []);

  return (
    <div>
      <h1>TV Shows</h1>
      <ul>
        {shows.map(show => (
          <li key={show.show.id}>
            {show.show.name} - {show.show.genres.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowsList;
