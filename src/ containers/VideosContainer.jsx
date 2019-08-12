import React, { Component } from "react";
import { navigate } from "@reach/router";
import FetchData from "../lib/fetchData";

export default class WithVideos extends Component {
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
      .then(responseJson => {
        this.setState({
          videos: responseJson.items,
          nextPageToken: responseJson.nextPageToken,
          prevPageToken: responseJson.prevPageToken
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
      <div className="WithVideos">
        {this.props.render(
          videos,
          nextPageToken,
          prevPageToken,
          this.handlePagination
        )}
      </div>
    );
  }
}
