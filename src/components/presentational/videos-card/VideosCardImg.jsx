import React from "react";

const VideosCardImg = ({ title, image }) => (
  <figure className="yt-card__media">
    <img
      className="evt__target smooth-effect"
      role="button"
      arial-label={title}
      src={image}
      alt={title}
    />
  </figure>
);

export default VideosCardImg;
