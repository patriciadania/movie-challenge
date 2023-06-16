import React from 'react';
import './ImageItem.css';

function ImageItem({ image }) {
  return (
    <div>
      <img src={image.imageUrl} alt="Movie" />
    </div>
  );
}

export default ImageItem;
