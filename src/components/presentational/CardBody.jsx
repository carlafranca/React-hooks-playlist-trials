import React from "react";
import { Link } from "@reach/router";
import { truncate } from "../../utils/Truncate";

const CardBody = ({ title, publishedAt, description, videoId }) => (
  <div className="yt-card__body">
    <h2 className="yt-card__title yt__title">
      <Link
        to="/video"
        state={{ videoId, title, description, publishedAt }}
        className="evt__target icon-after"
      >
        {title}
      </Link>
    </h2>
    <p className="yt-card__date yt__date">
      Published on <span>{publishedAt}</span>
    </p>
    <p
      className="yt-card__desc yt__desc"
      dangerouslySetInnerHTML={truncate(description, 20, "...")}
    />
  </div>
);

export default CardBody;
