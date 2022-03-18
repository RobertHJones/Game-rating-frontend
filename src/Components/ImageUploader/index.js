import React, { useEffect } from "react";
import { useState } from "react";
import "./index.css";

function ImageUploader({ picture }) {
  const [images, setImages] = useState([]);

  const base64Converter = (e, file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64Image = reader.result;
      setImages([
        ...images,
        { name: e.target.files[0].name, base64: base64Image },
      ]);
      console.log("this is images", base64Image);
    };
  };

  const handleClick = (e) => {
    const file = e.target.files[0];
    console.log(file);
    base64Converter(e, file);
  };

  useEffect(() => {
    picture(images);
  }, [images]);

  return (
    <div>
      <div>Upload your image here</div>
      <input type="file" onChange={handleClick} />

      {images !== undefined ? (
        images.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default ImageUploader;
