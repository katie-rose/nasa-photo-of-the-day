import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
const [nasaData, setNasaData] = useState([]);
console.log(nasaData);

useEffect(() => {
  axios
    .get(
      `https://api.nasa.gov/planetary/apod?api_key=t5gHMLnB9lijRBpavUdSI9c1cc3J82mHj9Fy6C0U&date=2019-03-15`
    )
    .then(res => {
      console.log(res.data);
      setNasaData(res.data.hdurl);
    })
    .then(console.log(nasaData))
    .catch(err => console.log(err));
}, [nasaData]);

  return (
    <div className="App">
      <p>
        <img src={`${nasaData}`} alt="NASA" width="500px"/>
      </p>
    </div>
  );
};

export default App;
