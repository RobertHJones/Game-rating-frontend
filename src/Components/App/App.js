import "./App.css";
import Header from "../Header/index";
import InputGet from "../Input-get";
import GameTable from "../Game-table";
import InputPost from "../Input-post/index.tsx";
import { useState } from "react";

// the API url
const API_URL = "https://dbdb-game-db.herokuapp.com/games";

function App() {
  const [gameData, setGameData] = useState([]);
  const [error, setError] = useState("");

  async function fetchGames(title, genre, rating) {
    //  destructure the object here
    const response = await fetch(
      `${API_URL}/?title=${title}&genre=${genre}&band=${rating}`
    );
    // for if no results are found for the search
    const data = await response.json();
    setError(`${title} not found, please search again`);

    setGameData(data.payload);
  }

  return (
    <div className="App">
      <Header />
      <InputGet onSubmit={fetchGames} />
      <GameTable details={gameData} error={error} key={gameData.id} />
      <InputPost />
    </div>
  );
}

export default App;
