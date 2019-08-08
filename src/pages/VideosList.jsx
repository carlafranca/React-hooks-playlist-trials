import React, { useEffect } from "react";
import { useStore } from "../context/StoreProvider";
import { fetchDataAction } from "../context/Actions";
import Pagination from "../components/Pagination";
import Card from "../components/presentational/Card";

const VideosList = () => {
  const { state, dispatch } = useStore();

  useEffect(() => {
    state.videoList.length === 0 &&
      fetchDataAction(dispatch, null, "FETCH_DATA");
  }, [state, dispatch]);

  if (state.videoList.length === 0) return <h1>Is Loading</h1>;

  const renderCard = item => (
    <li key={item.contentDetails.videoId}>
      <Card key={item.contentDetails.videoId} item={item} />
    </li>
  );

  return (
    <>
      <Pagination />
      <ul className="list-unstyled">
        {state.videoList
          .filter(item => item.status.privacyStatus !== "private")
          .map(renderCard)}
      </ul>
    </>
  );
};

export default VideosList;
