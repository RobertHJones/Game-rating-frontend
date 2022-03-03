import "./index.css";

// usestate to set the state of the table, initial state as blank and then set it as games

// games&& before code using games (if games exists then do the following to prevent the page crashing from initial state)

// divide page into two divs inside a div direction column, most of it taken up by the left one like 70% which is for the table, the other side for the image, then in the table space between flex

export default function GameTable({ details, image }) {
  return (
    <div class="gamecontainer">
      <table class="thegames">
        {" "}
        <div>
          <thead>
            <th id="Title">Title</th>
            <th id="Rating">Rating</th>
            <th id="Genre">Genre</th>
            <th id="Year">Year</th>
            <th id="Developer">Developer</th>
          </thead>
        </div>
        <tbody>
          <tb id="Title">Title</tb>
          <tb id="Rating">Rating</tb>
          <tb id="Genre">Genre</tb>
          <tb id="Year">Year</tb>
          <tb id="Developer">Developer</tb>{" "}
          {/*make this into the props to get the games from API */}
        </tbody>
      </table>
      <div>
        <img src={image} alt=""></img>
      </div>
    </div>
  );
}
