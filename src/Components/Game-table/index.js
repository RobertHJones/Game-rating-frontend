import "./index.css";

// usestate to set the state of the table, initial state as blank and then set it as games

// games&& before code using games (if games exists then do the following to prevent the page crashing from initial state)

// divide page into two divs inside a div direction column, most of it taken up by the left one like 70% which is for the table, the other side for the image, then in the table space between flex

export default function GameTable({ details }) {
  return (
    <div class="gamecontainer">
      <table class="thegames">
        {" "}
        <div>
          <thead>
            <th>Title</th>
            <th>Rating</th>
            <th>Genre</th>
            <th>Year</th>
            <th>Developer</th>
            <th>Comments</th>
            <th>Image</th>
          </thead>
        </div>
        <tbody>
          {/* <tb id="Title">{details.title}</tb>
          <tb id="Rating">{details.rating}</tb>
          <tb id="Genre">{details.genre}</tb>
          <tb id="Year">{details.year}</tb>
          <tb id="Developer">{details.developer}</tb>{" "} */}
          {/*make this into the props to get the games from API */}
        </tbody>
      </table>
    </div>
  );
}
