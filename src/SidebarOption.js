//This file handles the play, pause , skip ,previous buttons within the sidebar 
import React from "react";
import "./SidebarOption.css";


// sidebar function , has icon , buttons 
function SidebarOption({ option = "test", Icon }) {

  const handlePlaylist = () => {
    console.log("CLICKED")





    
  }
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{option}</h4> : <p  onClick={handlePlaylist}>{option}</p>}
    </div>
  );
}

export default SidebarOption;
