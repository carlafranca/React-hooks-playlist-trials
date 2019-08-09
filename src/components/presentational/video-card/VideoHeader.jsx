import React from "react";

const VideoHeader = ({ title, publishedAt }) => (
  <header className="yt-video__header">
    <h1 className="yt-video__title yt__title">{title}</h1>
    <p className="yt-video__date yt__date">
      Published on <span>{publishedAt}</span>
    </p>
  </header>
);

export default VideoHeader;
