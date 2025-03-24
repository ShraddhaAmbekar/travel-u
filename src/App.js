import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;
