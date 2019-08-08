import React, { createContext, useReducer, useContext } from "react";

//Create Context
const StoreContext = createContext(null);

//init State
const defaultState = {
  videoList: [],
  nextPageToken: null,
  prevPageToken: null,
  video: {}
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        videoList: action.payload.items,
        nextPageToken: action.payload.nextPageToken,
        prevPageToken: action.payload.prevPageToken
      };
    case "FETCH_VIDEO":
      return { ...state, video: action.payload };
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const value = { state, dispatch };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export const useStore = () => useContext(StoreContext);
