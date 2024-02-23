import React from "react";
import "./image.css";

function ImageGallery({ count = 7 }) {
  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push(require(`./i${i}.png`));
  }

  return (
    <>
      {images.map((image, index) => (
        <img className="ig-i" key={index} src={image} alt={` ${index + 1}`} />
      ))}
    </>
  );
}

export default ImageGallery;
