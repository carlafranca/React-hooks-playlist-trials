import React from "react";
import { Link } from "@reach/router";
import VideoHeader from "./video-card/VideoHeader";
import VideoPlayer from "./video-card/VideoPlayer";
import VideoDesc from "./video-card/VideoDesc";

const Video = props => {
  //check for props
  if (!props.location.state) return (window.location = "/Error");

  const { videoId, title, description, publishedAt } = props.location.state;

  return (
    <>
      <Link to="/" className="yt-video__link yt-btn smooth-effect icon-before">
        Back to videos
      </Link>

      <div className="yt-video yt">
        <VideoHeader title={title} publishedAt={publishedAt} />
        <div className="yt-video__body">
          <VideoPlayer videoId={videoId} />
          <VideoDesc description={description} />
        </div>
      </div>
    </>
  );
};

export default Video;
