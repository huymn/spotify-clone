import React from 'react';
import logo from '../Assets/spotify-logo.png';

const NavBar = () => {
    const navStyle = {
        backgroundColor: 'black',
        position: 'fixed',
        fontStyle: 'Gotham',
        width: '100vw',
        height: '80px',
        opacity: 0.5
    }

    const logoStyle = {
        position: 'absolute',
        height: '40px',
        width: '130px',
        top: 10,
        left: 55,
        padding: 10
    }

    return (
        <div style={navStyle}>
            <img src={logo} alt="spotify-logo" style={logoStyle}/>
        </div>
    )
}

export default NavBar;