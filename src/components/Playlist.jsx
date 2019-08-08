import React, { useContext } from "react";
import VideoContext from "./common/VideosContext";
import Pagination from "./common/Pagination";
import { Card } from "./Card";

export const Playlist = () => {
  const { list } = useContext(VideoContext);

  if (list.isLoading) return <h1>Is Loading</h1>;
  const { items } = list.data;

  return (
    <React.Fragment>
      <Pagination />
      <main>
        <ul className="list-unstyled">
          {items
            .filter(item => item.status.privacyStatus !== "private")
            .map(item => (
              <li key={item.contentDetails.videoId}>
                <Card item={item} />
              </li>
            ))}
        </ul>
      </main>
    </React.Fragment>
  );
};
