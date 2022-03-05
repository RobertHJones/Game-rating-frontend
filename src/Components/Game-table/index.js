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
        {details &&
          details.map((item) => {
            return (
              <tbody>
                <tb id="Title">{item.title}</tb>
                <tb id="Rating">{item.rating}</tb>
                <tb id="Genre">{item.genre}</tb>
                <tb id="Year">{item.year}</tb>
                <tb id="Developer">{item.developer}</tb>
                <tb id="Comments">{item.comments}</tb>
                <tb id="Image">{item.image}</tb>
                {/*make this into the props to get the games from API */}
              </tbody>
            );
          })}
      </table>
    </div>
  );
}
