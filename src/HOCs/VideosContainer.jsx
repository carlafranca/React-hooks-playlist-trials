import React, { Component } from "react";
import { navigate } from "@reach/router";
import FetchData from "../lib/fetchData";
import Videos from "../components/Videos";

const WithVideoList = WrappedComponent =>
  class extends Component {
    static displayName = `WithVideoList(${WrappedComponent.displayName ||
      WrappedComponent.name})`;

    state = {
      videos: [],
      nextPageToken: null,
      prevPageToken: null,
      onPaginationClick: null
    };

    getData = token => {
      FetchData(token)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(reponseJson => {
          this.setState({
            videos: reponseJson.items,
            nextPageToken: reponseJson.nextPageToken,
            prevPageToken: reponseJson.prevPageToken
          });
        })
        .catch(ex => {
          navigate("/Error", {
            state: {
              error: `Sorry we are experiencing some issues. Try again later.`
            }
          });
        });
    };

    componentDidMount() {
      this.getData();
    }

    handlePagination = (e, token) => {
      this.getData(token);
    };

    render() {
      const { videos, nextPageToken, prevPageToken } = this.state;

      return (
        <WrappedComponent
          videos={videos}
          nextPageToken={nextPageToken}
          prevPageToken={prevPageToken}
          onPaginationClick={this.handlePagination}
        />
      );
    }
  };

const VideosContainer = WithVideoList(Videos);

export class VideosList extends Component {
  render() {
    return <VideosContainer />;
  }
}
