import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { Avatar } from "@material-ui/core";
import { getTokenFromResponse } from "./spotify";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ playlists, user }, dispatch] = useStateValue();
  console.log(playlists);

  return (
    <div className="sidebar">
        <div className="sidebar__top">
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
        </div>
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
