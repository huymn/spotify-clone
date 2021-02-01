import React from 'react';
import album1 from '../Assets/album1.jpg';
import album2 from '../Assets/album2.jpg';
import album3 from '../Assets/album3.jpg';
import album4 from '../Assets/album4.jpg';
import album5 from '../Assets/album5.jpg';
import album6 from '../Assets/album6.jpg';

const HomeMusicPanel = () => {
    const containerStyle = {
        background: 'linear-gradient(90deg, #f542ef, #42cef5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '99vw',
        margin: 0,
        height: 670
    }

    const p1Style = {
        color: 'white',
        fontWeight: 900,
        fontSize: 50,
        margin: 0
    }

    const p2Style = {
        color: 'white',
        fontWeight: 500,
        fontSize: 20
    }

    const btnStyle = {
        backgroundColor: '#2bd92b',
        color: 'white',
        fontSize: 20,
        padding: '15px 30px',
        border: 'none',
        borderRadius: 50,
        fontWeight: 900,
        cursor: 'pointer'
    }

    const albumStyle = {
        width: 230,
        height: 230,
        padding: 20
    }

    return (
        <div style={containerStyle}>
            <div style={{paddingLeft: 30}}>
                <p style={p1Style}>Looking for Music?</p>
                <p style={p2Style}>Start listening to the best new releases</p>
                <button style={btnStyle}>Open Web Player</button>
            </div>
            <div style={{}}>
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