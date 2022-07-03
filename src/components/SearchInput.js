import React, { useState } from "react";
import "./styles/SearchInput.css";

function SearchInput(props) {
  const { setSearchResults } = props;
  const [text, setText] = useState("");

  function onSubmitHandler(e, text) {
    e.preventDefault();
    setSearchResults(text);
  }

  return (
    <div className="searchinput-wrapper">
      <form
        className="searchinput-form"
        onSubmit={(e) => onSubmitHandler(e, text)}
      >
        <input
          className="searchinput-input"
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </form>
      <div className="searchinput-btn" onClick={() => setSearchResults(text)}>
        <img
          className="searchinput-logo"
          src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-magnifying-glass-outdoor-kiranshastry-lineal-kiranshastry.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default SearchInput;
