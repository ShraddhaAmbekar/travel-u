import React from 'react';
import "./Home.css"
import TourCarousel from '../ui/TourCarausel';
import ToursSection from '../ui/TourSection';
import BlogSection from "./BlogSection"
import GallerySection from './GallerySection';

const Home = () => {
  return (
    <div>
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
