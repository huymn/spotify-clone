import React from 'react';
//import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App" style={{position: 'relative', top: 0, left: 0}}>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
