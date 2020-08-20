import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Title from "./components/Title";
import Date from "./components/Date";
import Image from "./components/Image";

function App() {
  const [nasaData, setNasaData] = useState([]);
  const [date, setDate] = useState("");
  
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=t5gHMLnB9lijRBpavUdSI9c1cc3J82mHj9Fy6C0U${date}`
      )
      .then(res => {
        console.log(res.data);
        setNasaData(res.data);
      })
      .then(console.log(nasaData))
      .catch(err => console.log(err));
  }, [ date ]);

  return (
    <div className="App">
      <h1>What Was The NASA Photo Of The Day On Your Birthday?</h1>
      <h2><em>Data only available since 06-20-1995</em></h2>
      <Date date={date} setDate={setDate} nasaData={nasaData} setNasaData={setNasaData} />
      <Title nasaData={nasaData} />
      <Image nasaData={nasaData} />
    </div>
  );
}

export default App;
