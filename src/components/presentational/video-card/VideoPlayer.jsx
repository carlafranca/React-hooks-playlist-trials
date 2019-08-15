import React from "react";
import useYouTube from "../../../hooks/useYouTube";

const VideoPlayer = ({ videoId }) => {
  const [VideoPlayer] = useYouTube(videoId);

  return <VideoPlayer />;
};

export default VideoPlayer;
