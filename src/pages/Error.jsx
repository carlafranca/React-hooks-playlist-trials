import React from "react";
import { Link } from "@reach/router";

const Error = () => {
  return (
    <div>
      <Link to="/" className="yt-video__link yt-btn smooth-effect icon-before">
        Back to videos
      </Link>
      <h1>Error Page</h1>
    </div>
  );
};

export default Error;
