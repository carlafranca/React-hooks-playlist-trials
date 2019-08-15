import React from "react";
import { Router } from "@reach/router";
import Video from "../components/presentational/Video";
import Title from "../components/presentational/Title";
import Videos from "../components/Videos";
import Error from "../components/Error";

function Application() {
  return (
    <>
      <Title />
      <main>
        <Router>
          <Videos path="/" />
          <Video path="/video" />
          <Error default />
        </Router>
      </main>
    </>
  );
}

export default Application;
