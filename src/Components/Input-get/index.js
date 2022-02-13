import React from "react";
import "./index.css";

export default function InputGet() {
  return (
    <div>
      <input aria-label="game-input" id="game-input" placeholder="Title" />
      <label for="genres" class="label">
        Choose a genre
      </label>
      <select id="genres" name="genres">
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
      <select id="ratings" name="ratings">
        <option value=""></option>
        <option value="80-100">80-100</option>
        <option value="60-80">60-80</option>
        <option value="40-60">40-60</option>
        <option value="20-40">20-40</option>
        <option value="0-20">0-20</option>
      </select>
      <button id="game-button">Search</button>
    </div>
  );
}
