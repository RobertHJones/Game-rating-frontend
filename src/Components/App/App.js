import "./App.css";
import Header from "../Header";
import InputGet from "../Input-get";
import GameTable from "../Game-table";
import InputPost from "../Input-post";
import { useState } from "react";
import API_URL from "../../config/index";

function App() {
  const [gameData, setGameData] = useState([]);

  async function fetchGames(game) {
    const { title, genre, rating } = game;
    console.log("this is", title);
    // // destructure the object here
    const response = await fetch(
      `${API_URL}/?title=${title}&genre=${genre}&band=${rating}`
    );
    const data = await response.json();
    console.log(data.payload);
    setGameData(data.payload);
  }

  // game not fetching on the deploy - fix this and increase search parameters to other fields

  // could use useeffect to set gameData to [] when title changes to clear the previous search - it's already doing this though?

  return (
    <div className="App">
      <Header />
      <InputGet onSubmit={fetchGames} />
      <GameTable details={gameData} key={gameData.id} />
      <InputPost />
    </div>
  );
}

export default App;
