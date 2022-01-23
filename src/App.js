import axios from 'axios';
import { Transition } from 'react-transition-group';
import { useEffect, useState } from "react";
import classNames from 'classnames';
import styles from './App.module.css';
import colors from "./data/color";


function App() {
  const [color, setColor] = useState("#333")
  const [changeColor, setChangeColor] = useState(false)
  const [quotes, setQuotes] = useState([])
  const [showBack, setShowBack] = useState(false)
  const [quote, setQuote] = useState({})

  const [animate, setAnimate] = useState(false);

  const handleAnimate = () => setAnimate(!animate);


  const tweet = '"' + quote.quote + '" ' + quote.author
  const postLink = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
  encodeURIComponent(tweet)

const setNewColor = () => {
    const n = Math.floor(Math.random() * 15)
    setShowBack(false)
    setTimeout(() => {
      setColor(colors[n])
      setShowBack(true)
    }, 650);
    

  }

const setQuotesArray = () => {
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
    setQuotesArray() //eslint-disable-next-line
  }, [])

  

  const getQuote = () => {
    if(quotes.length > 1){
      const q_index = Math.floor(Math.random() * quotes.length)
      setTimeout(() => {
        setQuote(quotes[q_index])
      }, 650);
    } else {
      setQuotesArray()
    }
  }

  const handleClick = () => {
    if (quotes.length > 1) {
      getQuote()
      setChangeColor(true)
      handleAnimate()
      if (changeColor){
        setNewColor()
      }
    } else {
      alert("Please reload page")
    }
    
  }

  const duration = 650;

const defaultStyle = {
    fontFamily: '"Raleway", sans-serif',
    fontWeight: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    opacity: 0.4,
    background: color,
    transition: `opacity ${duration}ms ease-in-out`,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0.4 },
  exited:  { opacity: 0.4 },
};
  
  return (
    <Transition in={showBack} timeout={duration}>
      {state => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>

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
          <h1 style={{textAlign: "center",color: color, fontSize: "2.4rem"}} >
            <i className="fa fa-quote-left" aria-hidden="true"></i>
            {" "}
            <span 
                className={classNames(
                  styles.animate,
                  animate && styles.grow
                )}>
                {quote.quote} 
            </span>
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
            <>
              
              <a  
                className={quote.quote ? "" : "disabled"} 
                style={{borderRadius: "3px", fontSize: "1.2rem", background: color, border: "none", padding: "10px", color: "#fff" }}
                href={quote.quote ? postLink : "#" }
              ><i className="fa fa-twitter" aria-hidden="true"></i></a>
            </>
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
    )}
  </Transition>
  );
}

export default App;
