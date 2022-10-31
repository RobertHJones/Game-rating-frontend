import "./App.css";
import Header from "../Header/index";
import InputGet from "../Input-get";
import GameTable from "../Game-table";
import InputPost from "../Input-post/index";
import { useEffect, useState } from "react";

// the API url
const API_URL = "https://dbdb-game-db.herokuapp.com/games";

function App() {
  const [error, setError] = useState("");
  const [gameData, setGameData] = useState<
    Array<{
      title: string;
      rating: string;
      genre: string;
      year: number;
      developer: string;
      comments: string;
      image: string;
    }>
  >([]);

  async function fetchGames(title: string, genre: string, rating: string) {
    //  destructure the object here
    const response = await fetch(
      `${API_URL}/?title=${title}&genre=${genre}&band=${rating}`
    );
    // for if no results are found for the search
    const data = await response.json();
    setError(`${title} not found, please search again`);

    setGameData(data.payload);
  }

  // get random game
  async function randomGame(id: number) {
    //  destructure the object here
    const response = await fetch(`${API_URL}/${id}`);
    // for if no results are found for the search
    const data = await response.json();

    setGameData(data.payload);
  }
  const randomNumber: number = Math.ceil(Math.random() * 40);

  // get random game on first load
  useEffect(() => {
    console.log(randomNumber);
    randomGame(randomNumber);
  }, []);

  return (
    <div className="App">
      <Header />
      <InputGet onSubmit={fetchGames} />
      <GameTable details={gameData} error={error} />
      <InputPost />
    </div>
  );
}

export default App;
