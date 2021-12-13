// This file combines sidebar , body and header components 
import React from "react";
import Header from "./Header";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />           
      </div>
      <Header spotify={spotify} />            
    </div>
  );
}

export default Player;
