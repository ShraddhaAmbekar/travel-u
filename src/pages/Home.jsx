import React from 'react';
import "./Home.css"
import TourCarousel from './sections/TourCarausel';
import ToursSection from './sections/TourSection';
import BlogSection from "./sections/BlogSection"
import Header from '../components/layout/Header';
import BottomNavbar from '../components/layout/BottomNavbar';
import GallerySection from './sections/GallerySection';

const Home = () => {
  return (
    <div>
      <Header />
      <BottomNavbar />
      <section>
        <h5 className="section-title text-center ">Welcome you <br />to <br /><span>"The Land of Gods"</span></h5>
      </section>

      {/* mix-tour section */}
       <TourCarousel />

      {/* gallery section */}
      <GallerySection />

      {/*  second tour section  */}   
        <ToursSection />
        
      {/* blog section */}
        <BlogSection />
    </div>


  )
}

export default Home
