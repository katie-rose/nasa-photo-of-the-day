import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Title from "./components/Title";
import Date from "./components/Date";
import Image from "./components/Image";

function App() {
const [nasaData, setNasaData] = useState([]);
console.log(nasaData);

useEffect(() => {
  axios
    .get(
      `https://api.nasa.gov/planetary/apod?api_key=t5gHMLnB9lijRBpavUdSI9c1cc3J82mHj9Fy6C0U&date=2008-10-17`
    )
    .then(res => {
      console.log(res.data);
      setNasaData(res.data);
    })
    .then(console.log(nasaData))
    .catch(err => console.log(err));
}, []);

  return (
    <div className="App">
      <Title nasaData={nasaData} />
      <Date nasaData={nasaData} />
      <Image nasaData={nasaData} />
    </div>
  );
};

export default App;
