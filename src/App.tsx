import { useState } from "react";
import { callChatAPI } from "./utils/callChatAPI";
import { callImgFlipAPI } from "./utils/callImgFlipAPI";
import "./App.css";

function App() {
  const [responseData, setResponseData] = useState("");
  const [memeImage, setMemeImage] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleSubmit = () => {
    setClicked(true);
    callChatAPI(setResponseData);
  };

  const handleRegenerate = () => {
    callChatAPI(setResponseData);
  };

  const handleMeme = () => {
    callImgFlipAPI(responseData, setMemeImage);
  };

  return (
    <>
      <h1>Chat2Meme</h1>
      <div className="card">
        <button onClick={handleSubmit}>Generate random meme caption</button>
        <div id="response" className={`response ${clicked ? "" : "hidden"}`}>
          {responseData}
        </div>
        <div className={`buttons ${clicked ? "" : "hidden"}`}>
          <button onClick={handleRegenerate}>Regenerate</button>
          <button onClick={handleMeme}>Meme it!</button>
        </div>
        <div className="memeImage">
          <img src={memeImage} />
        </div>
      </div>
    </>
  );
}

export default App;
