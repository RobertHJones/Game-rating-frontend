import "./App.css";
import Header from "../Header";
import InputGet from "../Input-get";
import GameTable from "../Game-table";
import Image from "../Image";
import InputPost from "../Input-post";
import Comments from "../Comments";

function App() {
  return (
    <div className="App">
      <Header />
      <InputGet />{" "}
      {/*onSubmit fetchdata or something for the input which then goes into the fetch request*/}
      <GameTable /> {/* the response from the fetch request goes into this */}
      <Image /> {/* and it also goes in here */}
      <Comments /> {/* and here */}
      <InputPost />
    </div>
  );
}

export default App;
