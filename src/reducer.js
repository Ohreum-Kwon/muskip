/* This file sets the state variables */
import { findAllByDisplayValue } from "@testing-library/react";

// initializing state variables to null
export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  work_playlist: null,
  top_artists: null,
  playing: false,
  item: null,
};

// reads in the state and connects to action accordingly
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    // set user information
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    // set play
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    
    // set item
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    // set playlist
    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };

    // set top artists
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    // set token
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    // set spotify
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    // set playlists
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
