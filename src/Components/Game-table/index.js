import "./index.css";

// usestate to set the state of the table, initial state as blank and then set it as games

// divide page into two divs inside a div direction column, most of it taken up by the left one like 70% which is for the table, the other side for the image, then in the table space between flex

export default function GameTable() {
  return (
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
    </table>
  );
}
