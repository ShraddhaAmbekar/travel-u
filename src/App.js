import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import
       Home from './pages/Home/Home.jsx';
import TourDetails from "./pages/TourDetails/TourDetails"
import Header from './components/layout/Header';
import BottomNavbar from './components/layout/BottomNavbar';
import AllImages from './pages/AllImages.jsx';
import CatagorywiseTrip from './pages/CatagorywiseTrip.jsx';
import FilterNavbar from './pages/FilteredTrip.jsx';
import ScrollToTop from './components/layout/ScrollToTop.jsx';
import BlogPage from './pages/other/BlogPage.jsx';


function App() {
  return (
    <div className="App">
      <Header />

      <ScrollToTop />
      <BottomNavbar />

      <Routes>
        <Route path="/" element={<Home/>}/> 
         <Route path="/tour/:id" element={<TourDetails/>} />
        <Route path='/all-images' element={<AllImages/>} />
        <Route path='/category-trip' element={<CatagorywiseTrip/>} />
        <Route path="/filter-trip" element={<FilterNavbar/>} />
        <Route path="/blogs" element={<BlogPage/>} />
        
      </Routes>

    </div>

  );
}

export default App;
