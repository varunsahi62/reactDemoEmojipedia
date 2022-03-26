import React from "react";
import Emoji from "../src/components/Emoji"
import emojipedia from "./emojipedia";

function App() {

  const myEmojiDictionary = emojipedia.map( (emojiData) => {

    return (
      <Emoji 
        emoji = {emojiData.emoji}
        name = {emojiData.name}
        meaning = {emojiData.meaning}
      />
    );

  } );

  return (
    <div>
      <h1>
        <span>&nbsp;Emojipedia&nbsp;</span>
      </h1>

      <dl className="dictionary">
        {myEmojiDictionary}
      </dl>
    </div>
  );
}

export default App;
