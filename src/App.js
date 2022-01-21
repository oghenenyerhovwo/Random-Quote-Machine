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
        <div>
          <h1 style={{color: color, fontSize: "3rem"}} >
            <i class="fa fa-quote-left" aria-hidden="true"></i>
            {" "}

          </h1>
        </div> 
        <div>
          <div
            style={{
              display: "inline-block"
            }}
          >
            <button
              style={{borderRadius: "3px", fontSize: "0.9rem", background: color, border: "none", padding: "10px", color: "#fff" }}
            >
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </button>
          </div>
          <div
            style={{
              display: "inline-block",
              float: "right",
            }}
          >
            <button
              style={{borderRadius: "3px", background: color, border: "none", padding: "10px", color: "#fff" }}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
