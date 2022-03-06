import "./index.css";

// usestate to set the state of the table, initial state as blank and then set it as games

// games&& before code using games (if games exists then do the following to prevent the page crashing from initial state)

// divide page into two divs inside a div direction column, most of it taken up by the left one like 70% which is for the table, the other side for the image, then in the table space between flex

export default function GameTable({ details }) {
  return (
    <div class="gamecontainer">
      <table class="thegames">
        {" "}
        <thead>
          <th>Title</th>
          <th>Rating</th>
          <th>Genre</th>
          <th>Year</th>
          <th>Developer</th>
          <th>Comments</th>
          <th>Image</th>
        </thead>
        {details &&
          details.map((item) => {
            return (
              <tbody>
                <td id="Title">{item.title}</td>
                <td id="Rating">{item.rating}</td>
                <td id="Genre">{item.genre}</td>
                <td id="Year">{item.year}</td>
                <td id="Developer">{item.developer}</td>
                <td id="Comments">{item.comments}</td>
                <td>
                  <img id="Image" src={item.image} alt="game" />
                </td>

                {/*make this into the props to get the games from API */}
              </tbody>
            );
          })}
      </table>
    </div>
  );
}
