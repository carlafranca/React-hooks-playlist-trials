import React from "react";
import { Link } from "@reach/router";
import VideoPlayer from "../components/presentational/VideoPlayer";
import VideoDescription from "../components/presentational/VideoDescription";
import VideoHeader from "../components/presentational/VideoHeader";

const Video = props => {
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
          <VideoDescription description={description} />
        </div>
      </div>
    </>
  );
};

export default Video;
