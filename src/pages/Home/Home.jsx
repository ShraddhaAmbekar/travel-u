import React from 'react';
import "./Home.css"
import TourCarousel from '../ui/TourCarausel';
import ToursSection from '../ui/TourSection';
import BlogSection from "./BlogSection"
import GallerySection from './GallerySection';

const Home = () => {
  return (
    <div>
<section className="">
  {/* Overlay */}
  <div className="" />

  {/* Banner Title */}
  <div className="text-center">
    <h1 className='hello-font'>
      WELCOME YOU<br />
      <span >TO</span><br />
      <span>
        "THE LAND OF GOD"
      </span>
    </h1>
    <div/>
  </div>



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
