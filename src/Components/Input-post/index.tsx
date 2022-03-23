import "./index.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ImageUploader from "../ImageUploader/indextwo";
import axios from "axios";

const API_URL = "https://dbdb-game-db.herokuapp.com/games";

type props = {
  title: string;
  rating: string;
  genre: string;
  year: number;
  developer: string;
  comments: string;
};

export default function InputPost() {
  const { register, handleSubmit } = useForm<props>();
  const [uploadedImages, setUploadedImages] = useState("");

  // take the image from uploader and set as uploadedImages
  function gameImage(images: string) {
    setUploadedImages(images);
  }

  // get the score band from the rating
  function getBand(str: string) {
    const num = Number(str);
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

  async function onFormSubmit(data: props) {
    // put image into object
    const gamePostData = Object.assign(data, {
      image: uploadedImages,
    });

    const band = getBand(gamePostData.rating);

    // put band into object
    const finalData = Object.assign(gamePostData, { band: band });

    // destructure the object
    const { title, rating, genre, year, developer, comments, image } =
      finalData;

    const submit = axios.post(`${API_URL}`, {
      title: title,
      rating: rating,
      band: band,
      genre: genre,
      year: year,
      developer: developer,
      comments: comments,
      image: image,
      // image: "https://www.elevana.com/images/blogs/Shrug.jpg", original placeholder
    });

    // refresh page on submit, after alert
    setTimeout(() => {
      window.location.reload();
    }, 200);

    alert(`${title} added to database`);
    console.log(submit);
  }

  return (
    <div>
      <h2>Input your own game here</h2>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div id="inputs">
          <input id="titleinput" placeholder="Title" {...register("title")} />
          <select id="genreinput" placeholder="Genre" {...register("genre")}>
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
            id="ratinginput"
            placeholder="Rating"
            {...register("rating")}
          />
          <input id="yearinput" placeholder="Year" {...register("year")} />
          <input
            id="developerinput"
            placeholder="Developer"
            {...register("developer")}
          />
          <textarea
            id="commentbox"
            placeholder="Enter your comments here"
            {...register("comments")}
          ></textarea>
          {/* <input
            name="image"
            id="imageinput"
            placeholder="Image Link"
            {...register("image")}
          /> */}
          <ImageUploader picture={gameImage} />
          <button className="game-button">Submit</button>
        </div>
      </form>
    </div>
  );
}
