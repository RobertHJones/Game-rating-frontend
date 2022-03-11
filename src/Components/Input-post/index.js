import "./index.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ImageUploader from "../ImageUploader";

const API_URL = "https://dbdb-game-db.herokuapp.com/games";

export default function InputPost() {
  const { register, handleSubmit } = useForm();
  const [uploadedImages, setUploadedImages] = useState("");

  const propertyInfo = (images) => {
    setUploadedImages(images);
  };

  function getBand(str) {
    const num = Number(str);
    console.log(num);
    if (num <= 20) {
      return "0-20";
    } else if (num <= 40) {
      return "20-40";
    } else if (num <= 60) {
      return "40-60";
    } else if (num <= 80) {
      return "60-80";
    } else if (num <= 100) {
      return "80-100";
    } else {
      return "N/A";
    }
  }

  async function onFormSubmit(data) {
    const gamePostData = Object.assign(data, {
      image: uploadedImages,
    });
    // console.log(gamePostData);

    const band = getBand(gamePostData.rating);
    console.log("the band is", band);

    const finalData = Object.assign(gamePostData, { band: band });
    console.log(finalData);

    const { title, rating, genre, year, developer, comments } = finalData;

    console.log(title, rating, band, genre, year, developer, comments);

    const response = await fetch(`${API_URL}`, {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title: title,
        rating: rating,
        band: band,
        genre: genre,
        year: year,
        developer: developer,
        comments: comments,
        image: "https://www.elevana.com/images/blogs/Shrug.jpg", // use cloudinary
      }),
    });

    console.log(response);
    const result = response.json();
    console.log(result);
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
          <select
            name="genre"
            id="genreinput"
            placeholder="Genre"
            {...register("genre")}
          >
            <option value="">Choose a genre</option>
            <option value="3D Platformer">3D Platformer</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Casual">Casual</option>
            <option value="Fighting">Fighting</option>
            <option value="First Person Puzzle">First Person Puzzle</option>
            <option value="First Person Shooter">First Person Shooter</option>
            <option value="God Simulator">God Simulator</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Racing">Racing</option>
            <option value="Real Time Strategy">Real Time Strategy</option>
            <option value="RPG">RPG</option>
            <option value="Sandbox">Sandbox</option>
            <option value="Sports Simulation">Sports Simulation</option>
            <option value="Third Person Action">Third Person Action</option>
            <option value="Turn Based Strategy">Turn Based Strategy</option>
          </select>
          <input
            name="rating"
            id="ratinginput"
            placeholder="Rating"
            {...register("rating")}
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
            name="comments"
            placeholder="Enter your comments here"
            {...register("comments")}
          ></textarea>
          <button className="game-button">Submit</button>
          <ImageUploader picture={propertyInfo} />
        </div>
      </form>
    </div>
  );
}
