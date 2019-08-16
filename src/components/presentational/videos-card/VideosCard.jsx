import React, { memo } from "react";
import VideosCardImg from "./VideosCardImg";
import VideosCardDesc from "./VideosCardDesc";
import { dateFormat } from "../../../lib/library";

const VideosCard = ({ item }) => {
  const { title, description, publishedAt, thumbnails } = item.snippet;
  const { videoId } = item.contentDetails;

  return (
    <div className="yt-card yt">
      <VideosCardImg title={title} image={thumbnails.default.url} />
      <VideosCardDesc
        title={title}
        publishedAt={dateFormat(publishedAt)}
        description={description}
        videoId={videoId}
      />
    </div>
  );
};

export default memo(VideosCard);
