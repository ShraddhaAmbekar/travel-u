import React from 'react';
import { Routes,Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import TourDetails from "./pages/TourDetails/TourDetails"
import Header from './components/layout/Header';
import BottomNavbar from './components/layout/BottomNavbar';
import AllImages from './pages/AllImages.jsx';



function App() {
  return (
    <div className="App">
         <Header />
         <BottomNavbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/tour/:id" element={<TourDetails/>} />
      <Route path='/all-images' element={<AllImages/>}/>
    </Routes>
  
    </div>
   
  );
}

export default App;
