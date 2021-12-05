import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import ProfileIcon from "@material-ui/icons/Face";
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
      <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={ProfileIcon} option="Skip Setter" />
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
