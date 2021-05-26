import React from 'react';

const HomePanel2 = () => {
    const div1Style = {
        backgroundColor: 'white',
        width: '98vw',
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        userSelect: 'none'
    }

    return (
        <div style={div1Style}>
            <h1 style={{fontSize: 40, paddingLeft: 70}}>Make the most of Spotify</h1>
            <div style={{display: 'flex', justifyContent:'center', paddingRight: 50, paddingLeft: 50}}>
                <div style={{padding: 20}}>
                    <h2>Manage your account</h2>
                    <p>Edit your profile, change your password, and update your payment information.</p>
                    <p style={{color: '#1ee81e', cursor: 'pointer'}}>MANAGE YOUR ACCOUNT</p>
                </div>
                <div style={{padding: 20}}>
                    <h2>Get our free app</h2>
                    <p>Seamlessly listen to music you love. Download the Spotify app for your computer.</p>
                    <p  style={{color: '#1ee81e', cursor: 'pointer'}}>DOWNLOAD DESKTOP APP</p>
                </div>
                <div style={{padding: 20}}>
                    <h2>Listen on the web</h2>
                    <p>To play and share music without the app, all within your browser, go to play.stotify.com.</p>
                    <p style={{color: '#1ee81e', cursor: 'pointer'}}>OPEN WEB PLAYER</p>
                </div>
            </div>
        </div>
    )
}

export default HomePanel2;