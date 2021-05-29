import React from 'react'
/**
 * TrackSearchResults.js
 * Author: Huy Nguyen
 * 
 * @param {track, chooseTrack} param0 
 * @returns result of the search
 */

export default function TrackSearchResult({track, chooseTrack}) {
    //Choose track to play
    function handlePlay() {
        chooseTrack(track);
    }

    return (
        <div style={{cursor: "pointer", display: "flex", paddingTop: 10, paddingBottom: 10}} onClick={handlePlay}>
            <img src={track.albumUrl} alt="Album" style={{height: "64px" , width: "64px"}} />
            <div style={{paddingLeft: 10}}>
                <div style={{margin: 10}}>{track.title}</div>
                <div style={{margin: 10, color: "grey"}}>{track.artist}</div>
            </div>
        </div>
    )
}