import "./index.css";

// defining the types for mapping through the game array
type props = {
  title: string;
  rating: number;
  genre: string;
  year: number;
  developer: string;
  comments: string;
  image: string;
};

// defining the types for the function
type functionProps = {
  details: any[];
  error: string;
};

// usestate to set the state of the table, initial state as blank and then set it as games
export default function GameTable({ details, error }: functionProps) {
  return (
    <div className="gamecontainer">
      <table className="thegames">
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
        {details.length === 0 && (
          <tbody>
            <td>{error}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tbody>
        )}
        {details.length > 0 &&
          details.map((item: props) => {
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
              </tbody>
            );
          })}
      </table>
    </div>
  );
}
