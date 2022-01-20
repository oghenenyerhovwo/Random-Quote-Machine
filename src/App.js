import { useEffect, useState } from "react";
import colors from "./data/color";


function App() {
  const [color, setColor] = useState("white")
  useEffect(() => {
    const n = Math. floor(Math. random() * 15)
    setColor(colors[n])
  }, [])

  return (
    <div
      style ={{
        display: "inline-block",
        height: "100vh",
        width: "100%",
        background: color,
      }}
    >
      Good
    </div>
  );
}

export default App;
