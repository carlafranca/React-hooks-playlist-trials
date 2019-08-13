import React, { Component } from "react";
import VideoStore from "../flux/VideoStore";
import Pagination from "./presentational/Pagination";
import VideosCard from "./presentational/videos-card/VideosCard";
import Loading from "./presentational/Loading";

class VideoList extends Component {
  state = VideoStore.getVideos();

  updateVideos = () => {
    const {
      videos,
      isLoading,
      nextPageToken,
      prevPageToken
    } = VideoStore.getVideos();
    this.setState({ videos, isLoading, nextPageToken, prevPageToken });
  };

  componentDidMount() {
    VideoStore.on("updated", this.updateVideos);
  }
  componentWillUnmount() {
    VideoStore.off("updated", this.updateVideos);
  }

  handleVideoCards = item => (
    <li key={item.id}>
      <VideosCard key={item.id} item={item} id={item.id} />
    </li>
  );

  render() {
    const { videos, isLoading, nextPageToken, prevPageToken } = this.state;
    if (isLoading) return <Loading />;

    return (
      <>
        <Pagination
          nextPageToken={nextPageToken}
          prevPageToken={prevPageToken}
        />

        <ul className="list-unstyled">
          {videos
            .filter(item => item.status.privacyStatus !== "private")
            .map(this.handleVideoCards)}
        </ul>
      </>
    );
  }
}

export default VideoList;
