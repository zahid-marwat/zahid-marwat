import React from "react";
import Tweets from "./Tweets";

const TweetList = ({ name, message }) => {
  return (
    <div>
      <Tweets name={name} message={message} />
      <Tweets name={name} message={message} />
      <Tweets name={name} message={message} />
      <Tweets name={name} message={message} />
    </div>
  );
};

export default TweetList;
