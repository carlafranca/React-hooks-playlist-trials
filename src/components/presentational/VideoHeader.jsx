import React from "react";

const VideoHeader = props => {
  return (
    <header className="yt-video__header">
      <h1 className="yt-video__title yt__title">{props.title}</h1>
      <p className="yt-video__date yt__date">
        Published on <span>{props.publishedAt}</span>
      </p>
    </header>
  );
};

export default VideoHeader;
