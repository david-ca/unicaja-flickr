import React from "react";
import "./styles/Pic.css";

function Pic(props) {
  const { farm, server, id, secret } = props;

  return (
    <div className="pic-wrapper">
      <img
        className="pic-image"
        src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`}
        alt=""
      />
    </div>
  );
}

export default Pic;
