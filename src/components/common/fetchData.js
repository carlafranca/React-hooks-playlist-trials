import Axios from "axios";

Axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("error: ", error);
    return Promise.reject(error);
  }
});
const getData = async objParams => {
  const url = "https://www.googleapis.com/youtube/v3/playlistItems";

  let params = {
    key: process.env.REACT_APP_GOOGLE_KEY,
    playlistId: "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
    part: "snippet,contentDetails,status",
    maxResults: "10"
  };

  if (objParams) {
    for (var prop in objParams) {
      if (prop === "key") return;
      params.pageToken = objParams[prop];
    }
  }

  const result = await Axios.get(url, {
    params: params,
    responseType: "json"
  });

  return result;
};

export { getData };
