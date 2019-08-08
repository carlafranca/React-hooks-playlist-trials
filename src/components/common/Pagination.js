import React, { useContext } from "react";
import VideoContext from "./VideosContext";
import { getData } from "./fetchData";

const Pagination = props => {
  const { list, setList } = useContext(VideoContext);

  if (!list || list.isLoading) {
    return <h1>Is Loading</h1>;
  }

  const handleClick = (e, obj) => {
    e.preventDefault();
    setList({ isLoading: true });

    getData(obj)
      .then(res => {
        setList({ isLoading: false, data: res.data });
      })
      .catch(error => setList({ status: "error", error }));
  };

  return (
    <nav aria-label="pagination top" className="yt-paging">
      <button
        onClick={e =>
          handleClick(e, { prevPageToken: list.data.prevPageToken })
        }
        className={
          list.data.prevPageToken
            ? "yt-paging__btn yt-btn smooth-effect"
            : "yt-paging__btn yt-btn smooth-effect yt-paging__btn-disabled"
        }
      >
        Prev
      </button>
      <button
        onClick={e =>
          handleClick(e, { nextPageToken: list.data.nextPageToken })
        }
        className={
          list.data.nextPageToken
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
