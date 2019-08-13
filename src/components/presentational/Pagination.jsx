import React from "react";
import { updateVideos } from "../../flux/actions";

const Pagination = ({ prevPageToken, nextPageToken }) => (
  <nav aria-label="pagination top" className="yt-paging">
    <button
      onClick={e => updateVideos(prevPageToken)}
      className={
        prevPageToken
          ? "yt-paging__btn yt-btn smooth-effect"
          : "yt-paging__btn yt-btn smooth-effect yt-paging__btn-disabled"
      }
    >
      Prev
    </button>
    <button
      onClick={e => updateVideos(nextPageToken)}
      className={
        nextPageToken
          ? "yt-paging__btn yt-btn smooth-effect"
          : "yt-paging__btn yt-btn smooth-effect yt-paging__btn-disabled"
      }
    >
      Next
    </button>
  </nav>
);

export default Pagination;
