import {React, useState, useEffect} from 'react';
import useAuth from '../useAuth';
import TrackSearchResult from './TrackSearchResult'
import Player from './Player'
import { Container, Form } from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-node';

/**
 * Dashboard.js
 * Author: Huy Nguyen
 * 
 * Component that allows you to search up songs and play it
 */

//Get an instance of the spotify web api with our id
const spotifyWebApi = new SpotifyWebApi({
    clientId: "d6e018be7f52406b9eb6f98cbd4f9ceb"
})

//Dashboard component
export default function Dashboard({code}) {
    //Get accessToken from code that was passed in
    const accessToken = useAuth(code);
    //State to keep track of what the user is searching
    const [search, setSearch] = useState('');
    //State to keep track of results from spotify api
    const [searchResults, setSearchResults] = useState([]);
    //State to keep track of what current track is playing
    const [playingTrack, setPlayingTrack] = useState();
    
    //Choose a track to play
    function chooseTrack(track) {
        setPlayingTrack(track);
        setSearch('');
    }

    //Whenever accessToken is changed
    //Set new accessToken to the spotify web api
    useEffect(() => {
        //Check to make sure that accessToken is valid
        if(!accessToken) return
        spotifyWebApi.setAccessToken(accessToken);
    }, [accessToken])

    //Get the tracks from user search input
    useEffect(() => {
        //Make sure both search and accessToken is valid
        if(!search) return setSearchResults([])
        if(!accessToken) return
        
        //cancel variable to prevent "re-search"
        let cancel = false;

        //Get all tracks from current search and set it to searchResults
        spotifyWebApi.searchTracks(search).then(res => {
            if(cancel) return
            setSearchResults(res.body.tracks.items.map(track => {
                //Get the smallest album image since there are multiple album images
                const smallestAlbumImage = track.album.images.reduce(
                (smallest, image) => {
                    if(image.height < smallest.height) return image
                    return smallest
                }, track.album.images[0])
                
                //Return relevant information
                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: smallestAlbumImage.url
                }
            }))
        })
        
        return () => cancel = true;
    }, [search, accessToken])

    return (
        <Container style={{height: "90vh"}}
        >
            <Form.Control
                type="search"
                placeholder="Search Songs/Artists"
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                    height: "5vh",
                    width: "20vw",
                    borderRadius: 10,
                    outline: 'none',
                    padding: "20px 5px",
                    fontSize: "3vh"
                }}
            />
            <div style={{overflowY: 'auto', height: "75vh"}}>
                {searchResults.map(track => 
                    <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack}/>
                )}
            </div>
            <div><Player accessToken={accessToken} trackUri={playingTrack?.uri}/></div>
        </Container>
    )
}