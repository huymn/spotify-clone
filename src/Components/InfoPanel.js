import React from 'react';
import { FaSpotify, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
import { onHover, onLeave } from './Functions'

/**
 * InfoPanel.js
 * Author: Huy Nguyen
 * @returns information panel component at the bottom of the home page
 */

const InfoPanel = () => {
    //Style for the list of items
    const listContentStyle = {
        fontSize: 15,
        color: 'white',
        fontWeight: 600,
        fontFamily: 'Arial',
        cursor: 'pointer'
    }
    //Style for the icons
    const socialIconsStyle = {
        color: 'white',
        fontSize: 40,
        margin: 0,
        padding: 10,
        cursor: 'pointer'
    }
    

    return (
        <div style={{
            backgroundColor: 'black',
            width: '100vw',
            fontFamily: 'Arial',
            height: 500
        }}>
            <div style={{display: 'flex', paddingTop: 70, userSelect: 'none'}}>
                <p style={{color: 'white', fontSize: 30, fontWeight: 500, margin: 30, cursor: 'pointer'}}><FaSpotify/> Spotify</p>
                <div style={{margin: 30}}>
                    <h1 style={{color: 'grey', fontSize: 15}}>COMPANY</h1>
                    <p onMouseEnter={onHover} onMouseLeave={onLeave} style={listContentStyle}>About</p>
                    <p onMouseEnter={onHover} onMouseLeave={onLeave} style={listContentStyle}>Jobs</p>
                    <p onMouseEnter={onHover} onMouseLeave={onLeave} style={listContentStyle}>For The Record</p>
                </div>
                <div style={{margin: 30}}>
                    <h1 style={{color: 'grey', fontSize: 15}}>COMMUNITIES</h1>
                    <p onMouseEnter={onHover} onMouseLeave={onLeave} style={listContentStyle}>For Artists</p>
                    <p onMouseEnter={onHover} onMouseLeave={onLeave} style={listContentStyle}>Developers</p>
                    <p onMouseEnter={onHover} onMouseLeave={onLeave} style={listContentStyle}>Advertising</p>
                    <p onMouseEnter={onHover} onMouseLeave={onLeave} style={listContentStyle}>Investors</p>
                    <p onMouseEnter={onHover} onMouseLeave={onLeave} style={listContentStyle}>Vendors</p>
                </div>
                <div style={{margin: 30}}>
                    <h1 style={{color: 'grey', fontSize: 15}}>USEFUL LINKS</h1>
                    <p onMouseEnter={onHover} onMouseLeave={onLeave} style={listContentStyle}>Support</p>
                    <p onMouseEnter={onHover} onMouseLeave={onLeave} style={listContentStyle}>Web Player</p>
                    <p onMouseEnter={onHover} onMouseLeave={onLeave} style={listContentStyle}>Free Mobile App</p>
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