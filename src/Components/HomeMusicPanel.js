import React from 'react';
import album1 from '../Assets/album1.jpg';
import album2 from '../Assets/album2.jpg';
import album3 from '../Assets/album3.jpg';
import album4 from '../Assets/album4.jpg';
import album5 from '../Assets/album5.jpg';
import album6 from '../Assets/album6.jpg';
/**
 * HomeMusicPanel.js
 * Author: Huy Nguyen
 * 
 * Home music panel component
 * Display the login button and some placeholder album covers
 */
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=d6e018be7f52406b9eb6f98cbd4f9ceb&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const HomeMusicPanel = () => {
    //Style for the albums
    const albumStyle = {
        width: 230,
        height: 230,
        padding: 20
    }

    return (
        <div 
            style={{
                background: 'linear-gradient(90deg, #f542ef, #42cef5)',
                fontFamily: 'Arial',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '99vw',
                margin: 0,
                height: 670
            }}
        >
            <div style={{paddingLeft: 30}}>
                <p 
                    style={{
                        color: 'white',
                        fontWeight: 900,
                        fontSize: 50,
                        margin: 0
                    }}
                >Looking for Music?</p>
                <p
                    style={{
                        color: 'white',
                        fontWeight: 500,
                        fontSize: 20,
                        paddingBottom: 10}}
                >Start listening to the best new releases</p>
                <a 
                    style={{
                        backgroundColor: '#2bd92b',
                        color: 'white',
                        fontSize: 20,
                        padding: '15px 30px',
                        border: 'none',
                        borderRadius: 50,
                        fontWeight: 900,
                        cursor: 'pointer'
                    }} 
                    href={AUTH_URL}
                    >Login with Spotify</a>
            </div>
            <div>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <img src={album1} alt="album1" style={albumStyle}/>
                    <img src={album2} alt="album2" style={albumStyle}/>
                    <img src={album3} alt="album3" style={albumStyle}/>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <img src={album4} alt="album4" style={albumStyle}/>
                    <img src={album5} alt="album5" style={albumStyle}/>
                    <img src={album6} alt="album6" style={albumStyle}/>
                </div>
            </div>
        </div>
    )
}

export default HomeMusicPanel