import React from 'react';
import './CastItem.css';

function CastItem({ actor }) {
  return (
    <div>
      <h3>{actor.name}</h3>
      <p>Character: {actor.character}</p>
      <img src={actor.profileImage} alt={actor.name} />
    </div>
  );
}

export default CastItem;
