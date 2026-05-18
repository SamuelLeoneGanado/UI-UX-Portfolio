import { Link } from "react-router-dom";

function MemoryGame() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        color: "white",
      }}
    >
      <div>
        <Link to="*">
          <h1>Memory Game</h1>
          <p>🚧 Under Construction 🚧</p>
        </Link>
      </div>
    </div>
  );
}

export default MemoryGame;
