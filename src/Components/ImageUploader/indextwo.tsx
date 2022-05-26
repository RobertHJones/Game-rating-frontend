import { useEffect } from "react";
import { useState } from "react";
import "./index.css";

export default function ImageUploader({ picture }) {
  const [images, setImages] = useState<
    Array<{
      name: string;
      base64: string | ArrayBuffer | null;
    }>
  >([]);

  // convert the image to base 64 to use for post request
  const base64Converter = (
    e: React.ChangeEvent<HTMLInputElement>,
    file: Blob
  ) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64Image = reader.result;
      if (!e.target.files) return;
      // add image to the array as an object
      setImages([
        ...images,
        { name: e.target.files[0].name, base64: base64Image },
      ]);
    };
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    // use the base64 converter on uploaded image
    base64Converter(e, file);
  };

  useEffect(() => {
    picture(images);
  }, [images]);

  return (
    <div>
      <label>
        <div className="image-text">Upload your image here</div>
        <input type="file" onChange={handleClick} />
      </label>
      {images !== undefined ? (
        // display the name of uploaded image
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
