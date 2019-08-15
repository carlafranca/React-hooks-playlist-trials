import React, { useEffect } from "react";
import load from "load-script";

let iframeAPIReady;
const useYouTube = videoId => {
  // const [player, setPlayer] = useState();

  if (!window.YT) {
    iframeAPIReady = new Promise(resolve => {
      const protocol =
        window.location.protocol === "http:" ? "http:" : "https:";

      load(protocol + "//www.youtube.com/iframe_api", error => {
        if (error) {
          throw new Error(`Unexpected action: ${error}`);
        }
      });

      window.onYouTubeIframeAPIReady = () => resolve(window.YT);
    });
  }

  useEffect(() => {
    iframeAPIReady.then(YT => {
      window.player = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId: videoId,
        onStateChange: () => {}
      });
    });
  }, [videoId]);

  const VideoPlayer = () => (
    <div className="yt-video__player">
      <div id="player" />
    </div>
  );

  return [VideoPlayer];
};

export default useYouTube;
