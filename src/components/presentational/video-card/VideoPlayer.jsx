import React from "react";
import PropTypes from "prop-types";

let frameAPIReady; //hold the promise

const VideoPlayer = ({ videoId }) => {
  //Check if the Script is mounted already
  if (!window.YT) {
    frameAPIReady = new Promise(resolve => {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = () => resolve(window.YT);
    });
  }

  //Create the video Player
  const loadVideo = YT => {
    window.player = new YT.Player("player", {
      height: "390",
      width: "640",
      videoId: videoId,
      onStateChange: () => {}
    });

    if (typeof EventTarget !== "undefined") {
      console.log("jefasdfafdsa");
      let func = EventTarget.prototype.addEventListener;
      EventTarget.prototype.addEventListener = function(type, fn, capture) {
        this.func = func;
        if (typeof capture !== "boolean") {
          capture = capture || {};
          capture.passive = false;
        }
        this.func(type, fn, capture);
      };
    }
  };

  //Load the video player after the script is loaded
  frameAPIReady.then(YT => loadVideo(YT));

  return (
    <div className="yt-video__player">
      <div id="player" />
    </div>
  );
};

VideoPlayer.propTypes = {
  videoId: PropTypes.string.isRequired
  // width: PropTypes.number,
  // height: PropTypes.number,
  // onStateChange: PropTypes.func
};

export default VideoPlayer;
