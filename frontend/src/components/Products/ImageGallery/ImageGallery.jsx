import { useEffect, useState } from "react";
import "./ImageGallery.css";

export const ImageGallery = ({ images, defaultImage }) => {
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    setSelectedImage(defaultImage);
  }, [defaultImage]);

  return (
    <div className="d-flex">
      <div className="thumbnails d-flex flex-column me-3">
        {images.map((img, index) => (
          <img
            key={index}
            src={img?.url}
            alt={img?.name}
            className={`image img-thumbnail mb-2 ${
              selectedImage?.name === img?.name ? "border-primary" : ""
            }`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      <div className="d-flex justify-content-center align-items-center ms-3">
        <img
          src={selectedImage?.url}
          alt={selectedImage?.name}
          className="main-image img-fluid"
        />
      </div>
    </div>
  );
};
