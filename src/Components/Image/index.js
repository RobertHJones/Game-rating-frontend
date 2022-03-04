import "./index.css";

export default function Image({ detail }) {
  return (
    <div>
      <p>{detail.title}</p>
      <img src={detail.image} alt="game" />
    </div>
  );
}
