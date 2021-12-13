/* This file handles functionalities in body of the main page */
import React from "react";
import "./Body.css";
import { useStateValue } from "./StateProvider";
import SongRow from "./SongRow";

function Body({ spotify }, state ) {
  const [{ playlist }, dispatch] = useStateValue();

  // function to play songs from playlist
  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:5LnhXaBy0eDgaoRGe7zm2L`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  // function to play individual songs
  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
        <div className="body__songs">
          {playlist?.tracks.items.map((item) => (
            <SongRow playSong={playSong} track={item.track} />
          ))}
        </div>
    </div>
  );
}

export default Body;
