import React, { useState } from "react";
import axios from "axios";

import SearchInput from "./components/SearchInput.js";
import Button from "./components/Button.js";
import PicList from "./components/PicList.js";

import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  function callAPI(str) {
    console.log("entered");
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${str}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((res) => {
        setSearchResults(res.data.photos.photo);
      })
      .catch(() => {
        console.log("Error during API call");
      });
  }

  return (
    <div className="App">
      <img
        className="app-logo"
        src="https://cdn.cdnlogo.com/logos/f/35/flickr-icon.svg"
        alt=""
      />
      <SearchInput setSearchResults={callAPI}></SearchInput>
      <div id="app-buttons">
        <Button term="Cats" setSearchResults={callAPI}>
          Cats
        </Button>
        <Button term="Beaches" setSearchResults={callAPI}>
          Beaches
        </Button>
        <Button term="Birds" setSearchResults={callAPI}>
          Birds
        </Button>
        <Button term="Food" setSearchResults={callAPI}></Button>
      </div>
      <PicList pics={searchResults}></PicList>
    </div>
  );
}

export default App;
