import "./App.css";
import Header from "../Header";
import InputGet from "../Input-get";
import GameTable from "../Game-table";
import InputPost from "../Input-post";
import { useState } from "react";
import API_URL from "../../config/index";

function App() {
  const [gameData, setGameData] = useState([]);

  async function fetchGames(title) {
    console.log(API_URL);
    const response = await fetch(`${API_URL}/?title=${title}`);
    const data = await response.json();
    console.log(data);
    setGameData(data.payload);
  }

  return (
    <div className="App">
      <Header />
      <InputGet onSubmit={fetchGames} />
      <GameTable details={gameData} key={gameData.id} />{" "}
      {/* need to figure out how to display a table in rows etc using React */}
      <InputPost />
    </div>
  );
}

export default App;
