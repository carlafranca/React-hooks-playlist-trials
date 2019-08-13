import AppDispatcher from "./AppDispatcher";

export const getVideos = () => {
  AppDispatcher.dispatch({ type: "GET_VIDEOS" });
};

export const updateVideos = token => {
  AppDispatcher.dispatch({ type: "UPDATE_VIDEOS_PAGE", payload: token });
};
