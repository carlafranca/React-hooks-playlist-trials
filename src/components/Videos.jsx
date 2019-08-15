import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import usePaging from "../hooks/usePaging";

import VideosCard from "./presentational/videos-card/VideosCard";
import Loading from "./presentational/Loading";

export default function Videos() {
  const [token, setToken] = useState(null);
  const [data] = useFetch(token);
  const [PagingNav] = usePaging(
    data.prevPageToken,
    data.nextPageToken,
    setToken
  );

  const handleVideoCards = item => (
    <li key={item.id}>
      <VideosCard key={item.id} item={item} />
    </li>
  );

  return data.isLoading ? (
    <Loading />
  ) : (
    <>
      <PagingNav />
      <ul className="list-unstyled">
        {data.videos
          .filter(item => item.status.privacyStatus !== "private")
          .map(handleVideoCards)}
      </ul>
    </>
  );
}
