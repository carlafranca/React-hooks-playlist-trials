import React from "react";

const VideoPlayer = props => {
  return (
    <div className="yt-video__player">
      <iframe
        id="player"
        frameBorder="0"
        allowFullScreen="1"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        title="YouTube video player"
        width="640"
        height="390"
        src={`https://www.youtube.com/embed/${props.videoId}`}
      />
    </div>
  );
};

export default VideoPlayer;
