import {React, useState, useEffect} from 'react';
import useAuth from '../useAuth';
import TrackSearchResult from './TrackSearchResult'
import Player from './Player'
import { Container, Form } from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyWebApi = new SpotifyWebApi({
    clientId: "d6e018be7f52406b9eb6f98cbd4f9ceb"
})



export default function Dashboard({code}) {
    const accessToken = useAuth(code);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [playingTrack, setPlayingTrack] = useState();
    
    function chooseTrack(track) {
        setPlayingTrack(track);
        setSearch('');
    }

    useEffect(() => {
        if(!accessToken) return
        spotifyWebApi.setAccessToken(accessToken);
    }, [accessToken])

    useEffect(() => {
        if(!search) return setSearchResults([])
        if(!accessToken) return
        
        let cancel = false;
        spotifyWebApi.searchTracks(search).then(res => {
            if(cancel) return
            setSearchResults(res.body.tracks.items.map(track => {
                const smallestAlbumImage = track.album.images.reduce(
                (smallest, image) => {
                    if(image.height < smallest.height) return image
                    return smallest
                }, track.album.images[0])

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