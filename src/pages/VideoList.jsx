import React, { Component } from "react";
import Pagination from "../components/Pagination";
import FetchData from "../lib/fetchData";
import VideosCard from "../components/presentational/videos-card/VideosCard";
import Loading from "../components/Loading";

class VideoList extends Component {
  state = {
    videos: [],
    nextPageToken: null,
    prevPageToken: null,
    isLoading: true
  };

  getData = token => {
    FetchData(token).then(res => {
      this.setState({
        videos: res.items,
        nextPageToken: res.nextPageToken,
        prevPageToken: res.prevPageToken,
        isLoading: false
      });
    });
  };

  componentDidMount() {
    this.getData();
  }

  handleVideoCards = item => (
    <li key={item.id}>
      <VideosCard key={item.id} item={item} />
    </li>
  );

  handlePagination = (e, token) => {
    this.setState({ isLoading: true });
    this.getData(token);
  };

  render() {
    const { videos, isLoading, nextPageToken, prevPageToken } = this.state;
    if (isLoading) return <Loading />;

    return (
      <>
        <Pagination
          onPaginationClick={this.handlePagination}
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
