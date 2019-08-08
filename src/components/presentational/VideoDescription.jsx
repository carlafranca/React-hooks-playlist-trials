import React from "react";
import { descriptionMarkup } from "../../utils/Truncate";

const VideoDescription = props => {
  return (
    <div
      className="yt-video__desc yt__desc"
      dangerouslySetInnerHTML={descriptionMarkup(props.description)}
    />
  );
};

export default VideoDescription;
