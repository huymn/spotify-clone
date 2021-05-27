import React from 'react';
import logo from '../Assets/spotify-logo.png';
import { onHover, onLeave } from './Functions'

const NavBar = () => {
    const navStyle = {
        backgroundColor: 'black',
        position: 'fixed',
        width: '100%',
        height: '80px',
        opacity: 0.3,
        zIndex: 1
    }

    const logoStyle = {
        position: 'absolute',
        height: '40px',
        width: '130px',
        top: 10,
        left: 50,
        padding: 10,
        cursor: 'pointer'
    }

    const navContentStyle = {
        color:'white',
        fontSize: 15,
        fontWeight: 700,
        paddingRight: 20
    }

    const navContentContainerStyle = {
        position: 'absolute',
        width: '30vw',
        right: 70,
        top: 15,
        display: 'flex',
        cursor: 'pointer'
    }

    return (
        <div>
            <div style={navStyle}></div>
            <div style={{position: 'fixed', top: 0, left: 0, width: '100vw', fontFamily: 'Arial', height: 80, zIndex: 1}}>
                <img src={logo} alt="spotify logo" style={logoStyle}/>
                <div style={navContentContainerStyle}>
                    <p onMouseEnter={onHover} onMouseLeave={onLeave} id="prem" style={navContentStyle}>Premium</p>
                    <p onMouseEnter={onHover} onMouseLeave={onLeave} id="supp" style={navContentStyle}>Support</p>
                    <p onMouseEnter={onHover} onMouseLeave={onLeave} id="download" style={navContentStyle}>Download</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar;