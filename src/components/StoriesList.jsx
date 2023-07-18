import React, { useState } from "react";
import StoryItem from "./StoryItem";

function StoriesList({ stories }) {
  return (
    <div className="stories-list">
      {stories.length > 0 ? (
        stories.map((story, index) => {
          return <StoryItem story={story} key={index} />;
        })
      ) : (
        <div> Empty List </div>
      )}
    </div>
  );
}

export default StoriesList;
