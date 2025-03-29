import React from 'react';
import { Routes,Route } from 'react-router-dom';

import './styles/App.css';
import Home from './pages/Home';
import TourDetails from './pages/TourDetails';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/tour/:id" element={<TourDetails />} />
    </Routes>
    
    </div>
   
  );
}

export default App;
