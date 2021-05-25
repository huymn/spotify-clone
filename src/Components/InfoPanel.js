import React from 'react';
import { FaSpotify, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
const InfoPanel = () => {
    const listContentStyle = {
        fontSize: 15,
        color: 'white',
        fontWeight: 500
    }

    const socialIconsStyle = {
        color: 'white',
        fontSize: 40,
        margin: 0,
        padding: 10
    }
    return (
        <div style={{
            backgroundColor: 'black',
            width: '100vw',
            height: 500
        }}>
            <div style={{display: 'flex', paddingTop: 70}}>
                <h1 style={{color: 'white', fontSize: 30, margin: 30}}><FaSpotify/> Spotify</h1>
                <div style={{margin: 30}}>
                    <h1 style={{color: 'grey', fontSize: 15}}>COMPANY</h1>
                    <p style={listContentStyle}>About</p>
                    <p style={listContentStyle}>Jobs</p>
                    <p style={listContentStyle}>For The Record</p>
                </div>
                <div style={{margin: 30}}>
                    <h1 style={{color: 'grey', fontSize: 15}}>COMMUNITIES</h1>
                    <p style={listContentStyle}>For Artists</p>
                    <p style={listContentStyle}>Developers</p>
                    <p style={listContentStyle}>Advertising</p>
                    <p style={listContentStyle}>Investors</p>
                    <p style={listContentStyle}>Vendors</p>
                </div>
                <div style={{margin: 30}}>
                    <h1 style={{color: 'grey', fontSize: 15}}>USEFUL LINKS</h1>
                    <p style={listContentStyle}>Support</p>
                    <p style={listContentStyle}>Web Player</p>
                    <p style={listContentStyle}>Free Mobile App</p>
                </div>
                <div style={{margin: 30}}>
                    <h1 style={{color: 'grey', fontSize: 15}}>SOCIALS</h1>
                    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <p style={socialIconsStyle}><FaInstagram/></p>
                        <p style={socialIconsStyle}><FaTwitter/></p>
                        <p style={socialIconsStyle}><FaFacebook/></p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default InfoPanel;