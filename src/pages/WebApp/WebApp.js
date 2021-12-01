import React from 'react'
import "./WebApp.css";

const CLIENT_ID = "663640c06513442e87c51a2075806944"
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize"
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/webapp"
const SPACE_DELIMITER = "%20";
const SCOPES = ["user-read-currently-playing", "user-read-playback-state"];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);


const WebApp = () => {
    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`
    }
    return (
        <div className="container">
            <h1>hi</h1>
            <button onClick={handleLogin}>login to Spotify</button>
        </div>
    )
}
export default WebApp
