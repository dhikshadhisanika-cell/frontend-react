import { useState } from "react";
import Card from "../components/card";

function Home() {
  const [favorite, setFavorite] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Home Page</h1>
      <p>Welcome to my React App</p>

      <button onClick={() => setFavorite(!favorite)}>
        {favorite ? "❤️ Favorited" : "🤍 Add to Favorite"}
      </button>

      <Card title="HTML" description="This is HTML Card" />
      <Card title="CSS" description="This is CSS Card" />
      <Card title="React" description="This is React Card" />
    </div>
  );
}

export default Home;