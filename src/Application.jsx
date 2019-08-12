import React from "react";
import { Router } from "@reach/router";
import Title from "./components/presentational/Title";
import { VideosList } from "./HOCs/VideosContainer";
import Video from "./components/presentational/Video";
import Error from "./components/Error";

function Application() {
  return (
    <>
      <Title />
      <main>
        <Router>
          <VideosList path="/" />
          <Video path="/video" />
          <Error default />
        </Router>
      </main>
    </>
  );
}

export default Application;
