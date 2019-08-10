import React from "react";
import { youTube } from "../../../lib/youTube";

const VideoPlayer = ({ videoId }) => {
  //Load the player
  youTube("player", videoId, "390", "640");

  return (
    <div className="yt-video__player">
      <div id="player" />
    </div>
  );
};

export default VideoPlayer;
