import { FormEvent, useState } from "react";
import { callChatAPI } from "./utils/callChatAPI";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [responseData, setResponseData] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Form submitted, ${prompt}`);
    setClicked(true);
    callChatAPI(prompt, setResponseData);
  };

  return (
    <>
      <h1>Chat2Meme</h1>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <input
            className="prompt-input"
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
            placeholder="Enter prompt here"
          />
        </div>
        <div>
          <button type="submit">Chat it up!</button>
        </div>
      </form>
      <div className="card">
        <div id="response" className={`response ${clicked ? "" : "hidden"}`}>
          {responseData}
        </div>
      </div>
    </>
  );
}

export default App;
