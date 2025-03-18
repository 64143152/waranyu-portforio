import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './components/Navbar';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div className="text-white min-vh-100" style={{ backgroundColor: '#533f38' }}>
      <Navbar />
      <Home />
      <About />
    </div>
    
  );
}

export default App;


