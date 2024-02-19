import React from "react";
import "./image.css";

const ImageGallery = () => {
  const images = [];
  for (let i = 1; i <= 5; i++) {
    images.push(require(`./i${i}.png`));
  }

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img className="ig-i" key={index} src={image} alt={` ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
