import PropTypes from "prop-types";

let frameAPIReady;

export function youTube(palyerId, videoId) {
  if (!window.YT) {
    frameAPIReady = new Promise(resolve => {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = () => resolve(window.YT);
    });
  }

  frameAPIReady.then(YT => loadVideo(YT, palyerId, videoId));

  return frameAPIReady;
}

function loadVideo(YT, playerId, videoId, height, width) {
  window.player = new YT.Player(playerId, {
    height,
    width,
    videoId: videoId,
    onStateChange: () => {}
  });
}

loadVideo.propTypes = {
  videoId: PropTypes.string.isRequired
  // width: PropTypes.number,
  // height: PropTypes.number,
  // onStateChange: PropTypes.func
};
