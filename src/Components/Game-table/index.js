import "./index.css";

// usestate to set the state of the table, initial state as blank and then set it as games

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
