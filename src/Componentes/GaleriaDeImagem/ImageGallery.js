import React from 'react';
import ImageItem from '../ItemdeImagem/ImageItem';
import './ImageGallery.css';

function ImageGallery({ images }) {
  return (
    <div>
      {images.map((image) => (
        <ImageItem key={image.id} image={image} />
      ))}
    </div>
  );
}

export default ImageGallery;
