import React from "react";
import "./Body.css";
import { useStateValue } from "./StateProvider";
import SongRow from "./SongRow";

function Body({ spotify }, state ) {
  const [{ discover_weekly, work_playlist }, dispatch] = useStateValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZF1EfQuqi3vRoAZ3`,
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
          {discover_weekly?.tracks.items.map((item) => (
            <SongRow playSong={playSong} track={item.track} />
          ))}
        </div>
        <div className="body__songs">
          {work_playlist?.tracks.items.map((item) => (
            <SongRow playSong={playSong} track={item.track} />
          ))}
        </div>
    </div>
  );
}

export default Body;
