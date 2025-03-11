import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const savedGallery = JSON.parse(localStorage.getItem("gallery")) || [];
    setGallery(savedGallery);
  }, []);

  return (

    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Gallery</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
        {gallery.map((img, index) => (
          <img key={index} src={img} alt="Gallery Item" width="150" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

