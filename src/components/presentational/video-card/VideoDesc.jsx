import React from "react";
import { descriptionMarkup } from "../../../lib/library";

const VideoDesc = ({ description }) => (
  <div
    className="yt-video__desc yt__desc"
    dangerouslySetInnerHTML={descriptionMarkup(description)}
  />
);

export default VideoDesc;
