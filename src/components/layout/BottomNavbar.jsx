import React from 'react';
import "./BottomNavbar.css"
import { Link } from 'react-router-dom';
import '../../styles/App.css'

const BottomNavbar = () => {
  return (
    <div>
      {/* Bottom Navigation Bar  */}
     <div className='mobile'>
       <div className="bottom-nav">
        <Link to="/"><i className="fas fa-home"></i><br />Home</Link>
        <Link to='/category-trip'><i className="fas fa-hiking"></i><br />Treks</Link>
        <Link to='/signin'><i className="fa fa-user" aria-hidden="true"></i><br />Sign In</Link>
        <Link to='/category-trip'><i className="fas fa-suitcase"></i><br />Packages</Link>
        <Link to='/blogs'><i className="fa-solid fa-blog"></i><br />Blogs</Link>
      </div>
     </div>
    </div>
  )
}

export default BottomNavbar
