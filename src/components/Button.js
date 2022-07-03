import React from "react";
import "./styles/Button.css";

function Button(props) {
  const { term } = props;
  const { setSearchResults } = props;

  function onClickHandler() {
    setSearchResults(term);
  }

  return (
    <div className="button-wrapper" onClick={() => onClickHandler(term)}>
      {term}
    </div>
  );
}

export default Button;
