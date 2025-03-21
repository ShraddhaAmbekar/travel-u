import React from 'react'; 
import "./BottomNavbar.css"

const BottomNavbar = () => {
  return (
    <div>
      {/* Bottom Navigation Bar  */}
      <div className="bottom-nav">
        <a href="#"><i className="fas fa-home"></i><br/>Home</a>
        <a href="#"><i className="fa-solid fa-blog"></i><br/>Blog</a>
        <a href="#"><i className="fa fa-user" aria-hidden="true"></i><br/>Sign In</a>
        <a href="#"><i className="fas fa-suitcase"></i><br/>Packages</a>
        <a href="#"><i className="fas fa-comments"></i><br/>Forum</a>
      </div>
    </div>
  )
}

export default BottomNavbar
