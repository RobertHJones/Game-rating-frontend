import "./index.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ImageUploader from "../ImageUploader";

export default function InputPost() {
  const { register, handleSubmit } = useForm();
  const [uploadedImages, setUploadedImages] = useState("");

  const propertyInfo = (images) => {
    setUploadedImages(images);
  };

  function onFormSubmit(data) {
    const gamePostData = Object.assign(data, {
      image: uploadedImages,
    });
    console.log(gamePostData);
  }

  return (
    <div>
      <h3>Input your own game here</h3>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div id="inputs">
          <input
            name="title"
            id="titleinput"
            placeholder="Title"
            {...register("title")}
          />
          <input
            name="rating"
            id="ratinginput"
            placeholder="Rating"
            {...register("rating")}
          />
          <input
            name="genre"
            id="genreinput"
            placeholder="Genre"
            {...register("genre")}
          />
          <input
            name="year"
            id="yearinput"
            placeholder="Year"
            {...register("year")}
          />
          <input
            name="developer"
            id="developerinput"
            placeholder="Developer"
            {...register("developer")}
          />
          <textarea
            id="commentbox"
            name="comment"
            placeholder="Enter your comments here"
            {...register("comment")}
          ></textarea>
          <button className="game-button">Submit</button>
          <ImageUploader picture={propertyInfo} />
        </div>
      </form>
    </div>
  );
}
