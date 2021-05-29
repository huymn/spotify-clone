import React from 'react';
import HomeMusicPanel from './HomeMusicPanel';
import HomePanel2 from './HomePanel2';
import InfoPanel from './InfoPanel';
/**
 * Home.js
 * Author: Huy Nguyen
 * 
 * Home page component
 * @returns home page
 */
const Home = () => {
    return (
        <div>
            <HomeMusicPanel />
            <HomePanel2 />
            <InfoPanel />
        </div>
    )
}

export default Home;