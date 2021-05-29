import React from 'react';
import logo from '../Assets/spotify-logo.png';
import { onHover, onLeave } from './Functions'
/**
 * NavBar.js
 * Author: Huy Nguyen
 * @returns nav bar component
 */
const NavBar = () => {
    const navContentStyle = {
        color:'white',
        fontSize: 15,
        fontWeight: 700,
        paddingRight: 20
    }

    return (
        <div>
            <div 
                style={{
                    backgroundColor: 'black',
                    position: 'fixed',
                    width: '100%',
                    height: '80px',
                    opacity: 0.3,
                    zIndex: 1}}>
            </div>
            <div 
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    fontFamily: 'Arial',
                    height: 80,
                    zIndex: 1
                }}
            >
                <img 
                    src={logo}
                    alt="spotify logo"
                    style={{
                        position: 'absolute',
                        height: '40px',
                        width: '130px',
                        top: 10,
                        left: 50,
                        padding: 10,
                        cursor: 'pointer'}}
                />
                <div 
                    style={{
                        position: 'absolute',
                        width: '30vw',
                        right: 70,
                        top: 15,
                        display: 'flex',
                        cursor: 'pointer'
                    }}
                >
                    <p onMouseEnter={onHover} onMouseLeave={onLeave} id="prem" style={navContentStyle}>Premium</p>
                    <p onMouseEnter={onHover} onMouseLeave={onLeave} id="supp" style={navContentStyle}>Support</p>
                    <p onMouseEnter={onHover} onMouseLeave={onLeave} id="download" style={navContentStyle}>Download</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar;