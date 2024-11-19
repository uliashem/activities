import './App.css';
import { useEffect, useState } from 'react';
import image from "./background.jpg";

function App() {

  const [quote, setQuote] = useState("");

  const getQuote = async () => {
    const response = await fetch(`https://bored.api.lewagon.com/api/activity`);
    const data = await response.json();
    setQuote(data.activity);
  }

  useEffect(() => {
    getQuote();

    }, [])


  return (<div className='App'>

    <div className='container'>
      <img src={image} className="img" alt='Background'/>
    </div>

    <div className="container">
      <h1>Let's find you something to do!</h1>
    </div>

    <div className="container">
       <p>{quote}</p>
    </div>

    <div className="container">
      <button onClick={getQuote}>Try new activity</button>
    </div>
      
  </div>
  );
}

export default App;
