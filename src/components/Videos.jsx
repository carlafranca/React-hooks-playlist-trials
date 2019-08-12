import React from "react";
import WithVideos from "../ containers/VideosContainer";
import VideosCard from "./presentational/videos-card/VideosCard";
import Pagination from "./presentational/Pagination";

const Videos = () => {
  return (
    <WithVideos
      render={(videos, nextPageToken, prevPageToken, handlePagination) => (
        <VideosList
          videos={videos}
          nextPageToken={nextPageToken}
          prevPageToken={prevPageToken}
          onPaginationClick={handlePagination}
        />
      )}
    />
  );
};

const VideosList = ({
  videos,
  nextPageToken,
  prevPageToken,
  onPaginationClick
}) => {
  const handleVideoCards = item => (
    <li key={item.id}>
      <VideosCard key={item.id} item={item} />
    </li>
  );

  const videosItems = videos
    .filter(item => item.status.privacyStatus !== "private")
    .map(handleVideoCards);

  return (
    <>
      <Pagination
        onPaginationClick={onPaginationClick}
        nextPageToken={nextPageToken}
        prevPageToken={prevPageToken}
      />
      <ul className="list-unstyled">{videosItems}</ul>
    </>
  );
};

export default Videos;
