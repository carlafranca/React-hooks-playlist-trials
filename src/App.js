import React from "react";
import { Router } from "@reach/router";
import { StoreProvider } from "./context/StoreProvider";
import VideosList from "./pages/VideosList";
import Video from "./pages/Video";
import Error from "./pages/Error";
import Title from "./components/presentational/Title";

import "./App.css";

function App() {
  return (
    <>
      <Title />
      <StoreProvider>
        <main>
          <Router>
            <VideosList path="/" />
            <Video path="/video" />
            <Error default />
          </Router>
        </main>
      </StoreProvider>
    </>
  );
}

export default App;
