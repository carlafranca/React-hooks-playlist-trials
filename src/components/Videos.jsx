import React, { Component } from "react";
import VideosCard from "./presentational/videos-card/VideosCard";
import Pagination from "./presentational/Pagination";

export default class Videos extends Component {
  handleVideoCards = item => (
    <li key={item.id}>
      <VideosCard key={item.id} item={item} />
    </li>
  );

  render() {
    const {
      videos,
      nextPageToken,
      prevPageToken,
      onPaginationClick
    } = this.props;

    const videosItems = videos
      .filter(item => item.status.privacyStatus !== "private")
      .map(this.handleVideoCards);

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
  }
}
