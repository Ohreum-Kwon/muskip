/* This file handles running the whole application */
import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";
import Player from "./Player";
import { getTokenFromResponse } from "./spotify";
import "./App.css";
import Login from "./Login";

// get Spotify API
const s = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    // set access token
    if (_token) {
      s.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // get playlist using playlist token
      s.getPlaylist("5LnhXaBy0eDgaoRGe7zm2L").then((response) =>
        dispatch({
          type: "SET_PLAYLIST",
          playlist: response,
        })
      );

      // get top artists from spotify
      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      // get user information from spotify
      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      // get user playlist from spotify
      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch]);

  return (
      <div className="app">
          {!token && <Login />}
          {token && <Player spotify={s} />}
      </div>
  );
}

export default App;
