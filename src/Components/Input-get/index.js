import React from "react";
import { useState } from "react";

import "./index.css";

export default function InputGet({ onSubmit }) {
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [title, setTitle] = useState("");

  function getTitleValue(e) {
    setTitle(e.target.value);
    console.log(title);
  }

  function getGenreValue(e) {
    setGenre(e.target.value);
    console.log(genre);
  }

  function getRatingValue(e) {
    setRating(e.target.value);
    console.log(rating);
  }

  function searchGames(e) {
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
        <label for="genres" class="label">
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
        <label for="ratings" class="label">
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
