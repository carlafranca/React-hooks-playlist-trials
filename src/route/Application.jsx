import React from "react";
import { Router } from "@reach/router";
import Video from "../components/presentational/Video";
import Title from "../components/presentational/Title";
import VideoList from "../components/VideoList";
import Error from "../components/Error";

function Application() {
  return (
    <>
      <Title />
      <main>
        <Router>
          <VideoList path="/" />
          <Video path="/video" />
          <Error default />
        </Router>
      </main>
    </>
  );
}

export default Application;
