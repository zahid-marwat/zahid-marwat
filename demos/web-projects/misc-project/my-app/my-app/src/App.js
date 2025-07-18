import React, { useState } from "react";
// import TweetList from "./Components/TweetList";
// import CreatTweets from "./Components/CreatTweets";

const goWithit = (comeOn) => {
  console.log(`Event is working ${comeOn}`);
};

function App() {
  const name = "Abdullah Khan";
  const message = "I went to sleep today wow.";

  const [name1, setName] = useState("Abdullah Khan");
  const changeIt = () => {
    setName("Ayan Khan");
  };
  return (
    <div>
      <h1>Hello {name1}</h1>
      <button onClick={changeIt}>State</button>
      <button onClick={() => goWithit("Abdullah")}>Click</button>
      {/* <CreatTweets />
      <TweetList name={name} message={message} /> */}
    </div>
  );
}

export default App;
