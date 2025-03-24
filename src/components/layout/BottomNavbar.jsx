import React from 'react'; 
import "./BottomNavbar.css"
import { Link } from 'react-router-dom';

const BottomNavbar = () => {
  return (
    <div>
      {/* Bottom Navigation Bar  */}
      <div className="bottom-nav">
        <Link to="/"><i className="fas fa-home"></i><br/>Home</Link>
        <Link><i className="fa-solid fa-blog"></i><br/>Blog</Link>
        <Link><i className="fa fa-user" aria-hidden="true"></i><br/>Sign In</Link>
        <Link><i className="fas fa-suitcase"></i><br/>Packages</Link>
        <Link><i className="fas fa-comments"></i><br/>Forum</Link>
      </div>
    </div>
  )
}

export default BottomNavbar
