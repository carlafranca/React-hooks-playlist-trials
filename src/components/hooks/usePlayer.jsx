import React, { useState, useEffect } from "react";

const usePlayer = videoId => {
  const [video, setVideo] = useState(videoId);

  useEffect(() => {
    setVideo(videoId);
  }, [videoId]);

  const loadVideo = () => {
    window.player = new window.YT.Player(`youtube-player-${videoId}`, {
      height: "390",
      width: "640",
      videoId: videoId
    });
  };

  //Check if the Script is mounted already
  if (!window.YT) {
    //load the script asynchronously
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    //Load the video after the script is loaded
    window.onYouTubeIframeAPIReady = loadVideo;
  } else {
    // If script mounted, load the video directly

    loadVideo();
  }

  const VideoPlayer = () => (
    <div className="yt-video__player">
      <div id={`youtube-player-${videoId}`} />
    </div>
  );

  return [video, VideoPlayer, setVideo];
};

export default usePlayer;
