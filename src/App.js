import React from 'react';
import { Routes,Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import TourDetails from './pages/TourDetails';
import Header from './components/layout/Header';
import BottomNavbar from './components/layout/BottomNavbar';


function App() {
  return (
    <div className="App">
         <Header />
         <BottomNavbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/tour/:id" element={<TourDetails />} />
    </Routes>
    
    </div>
   
  );
}

export default App;
