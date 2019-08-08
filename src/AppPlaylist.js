import React, { useState, useMemo, useEffect } from "react";
import { VideoProvider } from "./components/common/VideosContext";
import { getData } from "./components/common/fetchData";
import { PlaylistHeader } from "./components/PlaylistHeader";
import { Playlist } from "./components/Playlist";
import ErrorBoundary from "./components/common/ErrorBoundary";
import { Router } from "@reach/router";
import Details from "./components/Details";

import "./App.css";

const AppPlaylist = () => {
  const [list, setList] = useState({ data: null, isLoading: true });
  const provideList = useMemo(() => ({ list, setList }), [list, setList]);

  useEffect(() => {
    async function dataUpdate() {
      const res = await getData();
      setList({ isLoading: false, data: res.data });
    }

    dataUpdate();
  }, []);

  return (
    <React.Fragment>
      <PlaylistHeader title="My YouTube Playlist" />
      <ErrorBoundary>
        <VideoProvider value={provideList}>
          <Router>
            <Playlist path="/" />
            <Details path="/video" />
          </Router>
        </VideoProvider>
      </ErrorBoundary>
    </React.Fragment>
  );
};

export default AppPlaylist;
