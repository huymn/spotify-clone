import React from 'react';
import logo from '../Assets/spotify-logo.png';
import profileIcon from '../Assets/profile-icon.png';
import { FaSortDown } from 'react-icons/fa'
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
        fontFamily: 'Arial'
    }

    const navContentContainerStyle = {
        position: 'absolute',
        width: '30vw',
        right: 70,
        top: 15,
        display: 'flex',
        justifyContent: 'space-between',
        cursor: 'pointer'
    }

    const profileIconStyle = {
        paddingTop: 10,
        paddingRight: 10,
        width: 30,
        height: 30,
    }

    return (
        <div>
            <div style={navStyle}></div>
            <div style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: 80, zIndex: 1}}>
                <img src={logo} alt="spotify logo" style={logoStyle}/>
                <div style={navContentContainerStyle}>
                    <p onMouseEnter={onHover} onMouseLeave={onLeave} id="prem" style={navContentStyle}>Premium</p>
                    <p onMouseEnter={onHover} onMouseLeave={onLeave} id="supp" style={navContentStyle}>Support</p>
                    <p onMouseEnter={onHover} onMouseLeave={onLeave} id="download" style={navContentStyle}>Download</p>
                    <p style={navContentStyle}>|</p>
                    <div style={{display: 'flex'}}>
                        <img src={profileIcon} alt='profile icon' style={profileIconStyle}/>
                        <p onMouseEnter={onHover} onMouseLeave={onLeave} style={navContentStyle}>Profile <FaSortDown/></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;