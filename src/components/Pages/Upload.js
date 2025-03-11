import React, { useState } from "react";
import { useAdmin } from "./AdminContext";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const { isAdmin } = useAdmin();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [gallery, setGallery] = useState([]);

  if (!isAdmin) {
    navigate("/");
    return null;
  }

  const handleUpload = () => {
    if (image) {
      const newGallery = [...gallery, URL.createObjectURL(image)];
      setGallery(newGallery);
      localStorage.setItem("gallery", JSON.stringify(newGallery));
      alert("Image uploaded successfully!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Upload New Image</h2>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;
