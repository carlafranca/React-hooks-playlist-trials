const FetchData = async param => {
  let API_URL = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
  let params = {
    key: "AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw",
    playlistId: "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
    part: "snippet,contentDetails,status",
    maxResults: "10"
  };

  if (param) {
    params.pageToken = param;
  }

  Object.keys(params).forEach(key =>
    API_URL.searchParams.append(key, params[key])
  );

  const data = await fetch(API_URL);
  // const dataJSON = await data.json();

  return data;
};

export default FetchData;
