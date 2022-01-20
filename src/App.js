import { useEffect, useState } from "react";
import colors from "./data/color";


function App() {
  const [color, setColor] = useState("#333")
  useEffect(() => {
    const n = Math.floor(Math. random() * 15)
    setColor(colors[n])
  }, [])

  return (
    <div
      style ={{
        fontFamily: '"Raleway", sans-serif',
        fontWeight: 400,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: color,
      }}
    >
      <div
        style ={{
          borderRadius: "3px",
          position: "relative",
          width: "450px",
          padding: "40px 50px",
          display: "table",
          backgroundColor:" #fff",
          zIndex: 2,
        }}
      >
        years 
      </div>
    </div>
  );
}

export default App;
