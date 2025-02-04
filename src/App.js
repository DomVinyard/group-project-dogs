import React, { useState } from "react";
import Favourites from "./components/Favourites";
import RandomDog from "./components/RandomDog";
import DogBattle from "./components/DogBattle";
import Breeds from "./components/Breeds";
import "./App.css";

const App = () => {
  const [favouriteBreeds, setFavouriteBreeds] = useState([]);
  const [savedPhotos, setSavedPhotos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Dogs!</h1>
      </header>
      <Favourites />
      <RandomDog />
      <DogBattle />
      <Breeds />
    </div>
  );
};

export default App;
