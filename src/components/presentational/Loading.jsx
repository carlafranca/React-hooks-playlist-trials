import React from "react";
import loadingGif from "../../images/loading-arrow.gif";
export default function Loading() {
  return (
    <div className="loading">
      <h4>Videos data loading...</h4>
      <img src={loadingGif} alt="loading gif" />
    </div>
  );
}
