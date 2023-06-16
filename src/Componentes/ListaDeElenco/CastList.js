import React from 'react';
import CastItem from '../ItemDoElenco/CastItem';
import './CastList.css';

function CastList({ cast }) {
  return (
    <div>
      {cast.map((actor) => (
        <CastItem key={actor.id} actor={actor} />
      ))}
    </div>
  );
}

export default CastList;
