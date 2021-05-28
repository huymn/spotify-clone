import React from 'react';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Dashboard from './Components/Dashboard'

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    code ? <Dashboard code={code} /> :
    <div>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
