import React from "react";

const VideoContext = React.createContext(null);

export const VideoProvider = VideoContext.Provider;
export const VideoConsumer = VideoContext.Consumer;
export default VideoContext;
