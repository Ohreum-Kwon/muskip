import React,{useEffect} from 'react'
import SpotifyPlaylists from './components/SpotifyGetPlaylists/SpotifyPlaylists';
import "./WebApp.css";

const CLIENT_ID = "663640c06513442e87c51a2075806944"
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize"
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/webapp"
const SPACE_DELIMITER = "%20";
const SCOPES = ["user-read-currently-playing", "user-read-playback-state"];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

const getReturnedParamsFromSpotifyAuth = (hash) => {
    const stringAfterHashing = hash.substring(1);
    const paramsInUrl = stringAfterHashing.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumlator, currentValue) => {
        console.log(currentValue);
        const [key, value] = currentValue.split("=");
        accumlator[key] = value;
        return accumlator;
    }, {});
    return paramsSplitUp;
}

const WebApp = () => {
    useEffect(() => {
        if(window.location.hash){
            const {
                access_token,
                expires_in,
                token_type,
            } = getReturnedParamsFromSpotifyAuth(window.location.hash);
            localStorage.clear();
            localStorage.setItem("accessToken", access_token);
            localStorage.setItem("tokenType", token_type);
            localStorage.setItem("expiresIn", expires_in);
        }
    })
    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`
    }
    return (
        <div className="container">
            <h1>This page is for login to Spotify</h1>
            <button onClick={handleLogin}>login to Spotify</button>
            <SpotifyPlaylists />
        </div>
    )
}
export default WebApp
