import React from 'react';
import logo from '../Assets/spotify-logo.png';
import profileIcon from '../Assets/profile-icon.png';

const NavBar = () => {
    const navStyle = {
        backgroundColor: 'black',
        position: 'fixed',
        fontStyle: 'Gotham',
        width: '100vw',
        height: '80px',
        opacity: 0.3
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
        paddingRight: 30,
        fontSize: 15,
        fontWeight: 700
    }

    const navContentContainerStyle = {
        position: 'absolute',
        right: 70,
        top: 15,
        display: 'flex',
        cursor: 'pointer'
    }

    const profileIconStyle = {
        width: 40,
        height: 40,
    }

    return (
        <div style={navStyle}>
            <img src={logo} alt="spotify logo" style={logoStyle}/>
            <div style={navContentContainerStyle}>
                <p id="prem" style={navContentStyle}>Premium</p>
                <p id="supp" style={navContentStyle}>Support</p>
                <p id="download" style={navContentStyle}>Download</p>
                <p style={navContentStyle}>|</p>
                <img src={profileIcon} alt='profile icon' style={profileIconStyle}/>
                <p style={navContentStyle}>Profile v</p>
            </div>
        </div>
    )
}

export default NavBar;