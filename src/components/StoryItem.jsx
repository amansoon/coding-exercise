import React from "react";
import { NavLink } from "react-router-dom";

function StoryItem({ story }) {
  const { webUrl, webTitle, tags, fields } = story;

  return (
    <div className="story">
      <NavLink className="story__thumbnail" to={webUrl}>
        <img className="story__image" src={fields.thumbnail} alt="thumbnail" />
      </NavLink>
      <div className="story__detail">
        <h3 className="story__title">
          <NavLink to={webUrl} className={'story__title-link'}> {webTitle} </NavLink>
        </h3>
        <div className="story__keyword-list">
          {tags.map((tag, index) => (
            <NavLink className="story__keyword" to={`/search/${tag.webTitle.toLowerCase().replace(" ", "-")}`} key={index}>
              {tag.webTitle}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StoryItem;
