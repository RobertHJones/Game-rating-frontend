import "./App.css";
import Header from "../Header/index";
import InputGet from "../Input-get";
import GameTable from "../Game-table";
import InputPost from "../Input-post";
import { useState } from "react";
// import API_URL from "../../config/index";

const API_URL = "https://dbdb-game-db.herokuapp.com/games";
// const API_URL = "https://game-database-rob.herokuapp.com/games";

function App() {
  const [gameData, setGameData] = useState([]);
  const [error, setError] = useState("");

  async function fetchGames(title, genre, rating) {
    setError(`${title} not found, please search again`);
    // const { title, genre, rating } = game;
    console.log("this is", title);
    // // destructure the object here
    const response = await fetch(
      // `${API_URL}/?title=${title}&genre=${genre}&band=${rating}`
      `${API_URL}/?title=${title}&genre=${genre}&band=${rating}`
    );
    console.log("response", response);

    const data = await response.json();

    console.log(data.payload);
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
