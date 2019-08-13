import AppDispatcher from "./AppDispatcher";
import EventEmitter from "events";
import FetchData from "../lib/fetchData";

let initialState = {
  videos: [],
  nextPageToken: null,
  prevPageToken: null,
  isLoading: true
};

class VideoStore extends EventEmitter {
  constructor() {
    super();
    this.loadDataPromise = this.loadData();

    AppDispatcher.register(action => {
      if (action.type === "GET_VIDEOS") return this.getVideos();
      if (action.type === "UPDATE_VIDEOS_PAGE")
        return this.updateVideosPage(action.payload);
    });
  }

  //   storePageVideos(videos) {
  //     localStorage.setItem("videos", JSON.stringify(videos));
  //   }

  loadData(token) {
    FetchData(token).then(res => {
      const { items, nextPageToken, prevPageToken } = res;
      initialState = {
        videos: items,
        nextPageToken,
        prevPageToken,
        isLoading: false
      };
      //this.storePageVideos(items);
      this.emit("updated");
    });
  }

  getVideos() {
    return initialState;
  }
  updateVideosPage(token) {
    this.loadData(token);
  }
}

export default new VideoStore();
