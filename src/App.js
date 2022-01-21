import axios from 'axios';
import { useEffect, useState } from "react";
import colors from "./data/color";


function App() {
  const [color, setColor] = useState("#333")
  const [changeColor, setChangeColor] = useState(false)
  const [quotes, setQuotes] = useState([])
  const [quote, setQuote] = useState({})

const setNewColor = () => {
    const n = Math.floor(Math.random() * 15)
    setColor(colors[n])
  }

const setQoutesArray = () => {
  axios
      .get(
          "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
        )
      .then(res =>{ 
        setQuotes(res.data.quotes)
        setNewColor()
      })
      .catch(err => console.error(err));
}

  useEffect(() => {
    setQoutesArray() 
  }, [])

  

  const getQuote = () => {
    if(quotes.length > 1){
      const q_index = Math.floor(Math.random() * quotes.length)
      setQuote(quotes[q_index])
    } else {
      setQoutesArray()
    }
  }

  const handleClick = () => {
    getQuote()
    setChangeColor(true)
    if (changeColor){
      setNewColor()
    }
  }

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
        <div style={{marginBottom: "90px"}}>
          <h1 style={{color: color, fontSize: "3rem"}} >
            <i className="fa fa-quote-left" aria-hidden="true"></i>
            {" "}
            {quotes && quote.quote}
          </h1>
          <div>
            <div style={{display: "inline-block",color: color, float: "right", fontSize: "1.2rem"}}>-{quotes && quote.author}</div>
          </div>
        </div> 
        <div>
          <div
            style={{
              display: "inline-block"
            }}
          >
            <button
              style={{borderRadius: "3px", fontSize: "1.2rem", background: color, border: "none", padding: "10px", color: "#fff" }}
            >
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </button>
          </div>
          <div
            style={{
              display: "inline-block",
              float: "right",
            }}
          >
            <button
              onClick={handleClick}
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
