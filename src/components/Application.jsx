import React from "react";
import { Router } from "@reach/router";
import VideoList from "../pages/VideoList";
import Video from "../pages/Video";
import Error from "../pages/Error";
import Title from "./presentational/Title";

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
