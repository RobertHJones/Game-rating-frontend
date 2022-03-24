import { useState } from "react";

import "./index.css";

// defining the types for the input fields
type props = {
  onSubmit: (title: string, genre: string, rating: string) => void;
};

export default function InputGet({ onSubmit }: props) {
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [title, setTitle] = useState("");

  // take values from submitted data
  function getTitleValue(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  function getGenreValue(e: React.ChangeEvent<HTMLSelectElement>) {
    setGenre(e.target.value);
  }

  function getRatingValue(e: React.ChangeEvent<HTMLSelectElement>) {
    setRating(e.target.value);
  }

  // use game details for search
  function searchGames(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();

    onSubmit(title, genre, rating);
  }

  return (
    <form>
      <div>
        <input
          name="title"
          aria-label="game-input"
          id="game-input"
          placeholder="Title"
          onChange={getTitleValue}
        />
        <label htmlFor="genres" className="label">
          Choose a genre
        </label>
        <select id="genres" name="genre" onChange={getGenreValue}>
          <option value=""></option>
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
        <label htmlFor="ratings" className="label">
          Choose Rob's rating (%)
        </label>
        <select id="ratings" name="rating" onChange={getRatingValue}>
          <option value=""></option>
          <option value="80-100">80-100</option>
          <option value="60-80">60-80</option>
          <option value="40-60">40-60</option>
          <option value="20-40">20-40</option>
          <option value="0-20">0-20</option>
        </select>
        <button onClick={searchGames} className="game-button">
          Search
        </button>
      </div>
    </form>
  );
}
