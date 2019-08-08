import React from "react";
import { Link } from "@reach/router";
import { descriptionMarkup } from "../utils/Truncate";

const Video = props => {
  const { videoId, title, description, publishedAt } = props.location.state;

  return (
    <>
      <Link to="/" className="yt-video__link yt-btn smooth-effect icon-before">
        Back to videos
      </Link>
      <div className="yt-video yt">
        <header className="yt-video__header">
          <h1 className="yt-video__title yt__title">{title}</h1>
          <p className="yt-video__date yt__date">
            Published on <span>{publishedAt}</span>
          </p>
        </header>
        <div className="yt-video__body">
          <div className="yt-video__player" videoid="">
            <iframe
              id="player"
              frameBorder="0"
              allowFullScreen="1"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              title="YouTube video player"
              width="640"
              height="390"
              src={`https://www.youtube.com/embed/${videoId}`}
            />
          </div>
          <div
            className="yt-video__desc yt__desc"
            dangerouslySetInnerHTML={descriptionMarkup(description)}
          />
        </div>
      </div>
    </>
  );
};

export default Video;
