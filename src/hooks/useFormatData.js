import { useState, useEffect } from "react";

let initData = {
  videos: [],
  nextPageToken: null,
  prevPageToken: null,
  isLoading: true
};
export default function useFormatData(data) {
  const [formatedData, setFormatedData] = useState(initData);

  useEffect(() => {
    if (data) {
      const { items, nextPageToken, prevPageToken = null } = data;

      setFormatedData({
        videos: items,
        nextPageToken,
        prevPageToken,
        isLoading: false
      });
    }
  }, [data]);

  return [formatedData, setFormatedData];
}
