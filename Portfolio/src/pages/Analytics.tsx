import { Link } from "react-router-dom";

function Analytics() {
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
          <h1>Analytics</h1>
          <p>🚧 Under Construction 🚧</p>
        </Link>
      </div>
    </div>
  );
}

export default Analytics;
