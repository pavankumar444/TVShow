import React from 'react';

const ShowDetails = ({ show }) => {
  const handleClick = () => {
    // handle ticket booking
  }

  return (
    <div>
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
      <button onClick={handleClick}>Book a ticket</button>
    </div>
  );
}

export default ShowDetails;
