import React, {useState, useEffect} from 'react'
import SpotifyWebPlayer from 'react-spotify-web-playback/lib'
/**
 * Player.js
 * Author: Huy Nguyen
 * 
 * @param {accessToken, trackUri} param0 
 * @returns player component from spotify web api playback
 */
export default function Player({accessToken, trackUri}) {
    //State to keep track if a track is playing or not
    const [play, setPlay] = useState(false);
    //Track is playing when the trackUri changed
    useEffect(() => setPlay(true), [trackUri]);
    //Make sure accessToken is valid
    if (!accessToken) return null
    return  <SpotifyWebPlayer 
                token={accessToken}
                showSaveIcon
                callback={state => {
                    if(!state.isPlaying) setPlay(false);
                }}
                play={play}
                uris={trackUri ? [trackUri] : []}
            />
}