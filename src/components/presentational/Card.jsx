import React from "react";
import CardImage from "./CardImage";
import CardBody from "./CardBody";

const Card = ({ item }) => (
  <div className="yt-card yt">
    <CardImage
      title={item.snippet.title}
      image={item.snippet.thumbnails.default.url}
    />

    <CardBody
      title={item.snippet.title}
      publishedAt={item.snippet.publishedAt}
      description={item.snippet.description}
      videoId={item.contentDetails.videoId}
    />
  </div>
);

export default Card;
