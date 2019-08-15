import { useState, useEffect } from "react";

let initData = {
  videos: [],
  nextPageToken: null,
  prevPageToken: null,
  isLoading: true
};

export default function useFetch(token) {
  const [data, setData] = useState(initData);

  let API_URL = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
  let params = {
    key: "AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw",
    playlistId: "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
    part: "snippet,contentDetails,status",
    maxResults: "10"
  };

  if (token) {
    params.pageToken = token.token;
  }

  Object.keys(params).forEach(key =>
    API_URL.searchParams.append(key, params[key])
  );

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(resJSON => {
        const { items, nextPageToken, prevPageToken } = resJSON;
        setData({
          videos: items,
          nextPageToken,
          prevPageToken,
          isLoading: false
        });
      });
  }, [token]);

  return [data, setData];
}
