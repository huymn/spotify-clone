import { useState, useEffect} from 'react';
import axios from 'axios';
/**
 * useAuth.js
 * Author: Huy Nguyen
 * 
 * function for authenticating logins
 * 
 * @param {code} code 
 * @returns 
 */
export default function useAuth(code) {
    //State to keep track of access token
    const [accessToken, setAccessToken] = useState();
    //State to keep track of refresh token
    const [refreshToken, setRefreshToken] = useState();
    //State to keep track of when this token expires
    const [expiresIn, setExpiresIn] = useState();

    //Whenever we get a new code
    //Get the code, and reset all the states with this new code
    useEffect(() => {
        axios.post('http://localhost:3001/login', {
            code,
        })
        .then(res => {
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn);
            //Remove code from URL
            window.history.pushState({}, null, '/')
        })
        .catch(() => {
            //Redirect to home page if there's an error with authentication
            window.location = "/"
        })
    }, [code])

    //Whenever we get new refresh token and expires in, utilized the time
    useEffect(() => {
        if(!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
            axios.post('http://localhost:3001/refresh', {
                refreshToken,
            })
            .then(res => {
                setRefreshToken(res.data.refreshToken);
                setExpiresIn(res.data.expiresIn);
            })
            .catch(() => {
                //Redirect to home page if there's an error with authentication
                window.location = "/"
            })
        }, (expiresIn - 60) * 1000);
        return () => clearInterval(interval);
    }, [refreshToken, expiresIn])

    return accessToken;
}