/**
 * Server.js
 * Author: Huy Nguyen
 * 
 * Express server that uses the spotify api
 */

const express = require('express');
const cors = require('cors');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();

app.use(cors());
app.use(express.json());

// Refresh feature so that the user don't have to login frequently
app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyWebApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'd6e018be7f52406b9eb6f98cbd4f9ceb',
        clientSecret: '09ac428a59be4f8182cf42d5b5f7e12a',
        refreshToken,
    })
    //Set up spotify web api
    spotifyWebApi
        .refreshAccessToken().
        then((data) => {
            res.json({
                accessToken: data.body.accessToken,
                expiresIn: data.body.expiresIn
            })
        })
        .catch(() => {
            res.sendStatus(400);
        })
})

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyWebApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'd6e018be7f52406b9eb6f98cbd4f9ceb',
        clientSecret: '09ac428a59be4f8182cf42d5b5f7e12a'
    })
    //Set up spotify web api
    spotifyWebApi
        .authorizationCodeGrant(code)
        .then(data => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in
            })
        })
        .catch(() => {
            res.sendStatus(400);
        })
})

//Listen to new port
app.listen(3001);