import React from 'react';

const HomeMusicPanel = () => {
    const containerStyle = {
        background: 'linear-gradient(90deg, #f542ef, #42cef5)',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }

    const p1Style = {
        color: 'white',
        fontWeight: 900,
        fontSize: 50,
        lineHeight: 0
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
        padding: '15px 50px 15px 50px',
        border: 'none',
        borderRadius: 50,
        fontWeight: 900,
        cursor: 'pointer'
    }

    return (
        <div style={containerStyle}>
            <div>
                <p style={p1Style}>Looking for Music?</p>
                <p style={p2Style}>Start listening to the best new releases</p>
                <button style={btnStyle}>Open Web Player</button>
            </div>
        </div>
    )
}

export default HomeMusicPanel