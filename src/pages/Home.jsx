import React from 'react';
import "./Home.css"
import TourCarousel from '../components/ui/TourCarausel';
import ToursSection from '../components/ui/TourSection';
import BlogSection from "./BlogSection";
import Header from '../components/layout/Header';
import BottomNavbar from '../components/layout/BottomNavbar';


const galleryData = [
  {
    id: 1,
    img: "https://tse4.mm.bing.net/th?id=OIP.h4P4S80KfcAVnHEa1xpcTwHaIv&pid=Api&P=0&h=180",
    title: "trip-1",
    back: "it is flip-back content"
  },
  {
    id: 2,
    img: "https://tse4.mm.bing.net/th?id=OIP.mFLCYKuQOHj7C1W-scMbrAHaGU&pid=Api&P=0&h=180",
    title: "trip-2",
    back: "it is flip-back content"
  },
  {
    id: 3,
    img: "https://tse4.mm.bing.net/th?id=OIP.6m1gHkGhQecZBLdE_CX6LgHaEK&pid=Api&P=0&h=180",
    title: "trip-3",
    back: "it is flip-back content"
  },
  {
    id: 4,
    img: "https://tse3.mm.bing.net/th?id=OIP.766_B8qkqsk4mITigAkRAwHaG_&pid=Api&P=0&h=180",
    title: "trip-4",
    back: "it is flip-back content"
  },
  {
    id: 5,
    img: "https://cdn.wallpapersafari.com/36/77/XnZCVo.jpg",
    title: "trip-5",
    back: "it is flip-back content"
  },

  {
    id: 6,
    img: "https://i.pinimg.com/originals/c2/dc/f5/c2dcf5359a0407ac4d6ea9e67591faa9.jpg",
    title: "trip-6",
    back: "it is flip-back content"
  },
];

const Home = () => {
  return (
    <div>
      <Header />
      <BottomNavbar />
      <section>
        <h5 className="section-title text-center ">Welcome you <br />to <br /><span>"The Land of Gods"</span></h5>
      </section>

{/* mix-tour section */}
      <section> <TourCarousel /></section>

      {/* gallery section */}
      <section>
        <div className="container-fluid p-0 my-3">
          <div className="gallery-section d-flex flex-wrap g-0">
            <div className="gallery-item front-title text-uppercase">
              <h2>Land of Gods</h2>
            </div>

            {galleryData.map((item) => (
              <div key={item.id} className="gallery-item">
                <div className="flip-card">
                  <div className="front">
                    <img src={item.img} alt={item.title} />
                    <div className="centered">{item.title}</div>
                  </div>
                  <div className="back">
                    <span className="card-content">{item.back}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  second tour section  */}
      <div>
        <ToursSection />

      </div>
      <div>
        <BlogSection />
      </div>
    </div>


  )
}

export default Home
