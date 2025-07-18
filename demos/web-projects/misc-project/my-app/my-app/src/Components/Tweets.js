import React from "react";

const Tweets = ({ name, message }) => {
  return (
    <div>
      <h2>Name{name}</h2>
      <h3>{message}</h3>
      <button>Like</button>
      <button>Submit</button>
    </div>
  );
};

export default Tweets;
