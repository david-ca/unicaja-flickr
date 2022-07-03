import React, { useState } from "react";
import Pic from "./Pic.js";
import "./styles/PicList.css";

function PicList(props) {
  const { pics } = props;
  //const [emojiCopied, setEmojiCopied] = useState("");

  const listPics = pics.map((each) => (
    <Pic
      farm={each.farm}
      server={each.server}
      id={each.id}
      secret={each.secret}
    ></Pic>
  ));

  return <div className="piclist-wrapper">{listPics}</div>;
}

export default PicList;
