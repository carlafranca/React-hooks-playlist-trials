import React from "react";
import { useStore } from "../context/StoreProvider";
import { fetchDataAction } from "../context/Actions";

const Pagination = () => {
  const { state, dispatch } = useStore();
  const { nextPageToken, prevPageToken } = state;

  const handleClick = (e, param, action) => {
    e.preventDefault();
    fetchDataAction(dispatch, param, action);
  };

  return (
    <nav aria-label="pagination top" className="yt-paging">
      <button
        onClick={e => handleClick(e, prevPageToken, "FETCH_DATA")}
        className={
          prevPageToken
            ? "yt-paging__btn yt-btn smooth-effect"
            : "yt-paging__btn yt-btn smooth-effect yt-paging__btn-disabled"
        }
      >
        Prev
      </button>
      <button
        onClick={e => handleClick(e, nextPageToken, "FETCH_DATA")}
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
};

export default Pagination;
