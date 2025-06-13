import React from 'react';
import './layout.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className='mobile'>
          <img className='logo' src="/assets/images/Icons/Travel_U-logo.png" alt="Tripoto logo" />
        </div>

<div className='desktop'>
        <nav className="navbar navbar-expand-md navbar-dark text-primary">
          <div className="container-fluid nav-center">
            <div className="d-flex text-center" id="navbarNav">
              <ul className="navbar-nav">
              
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                </li>
               
                <li className="nav-item">
                  <Link className="nav-link" to='/category-trip'>Treks</Link>
                </li>
                
              <img className='logo' src="/assets/images/Icons/Travel_U-logo.png" alt="Tripoto logo" />
                
               
                <li className="nav-item">
                  <Link className="nav-link" to='/category-trip'>Packages</Link>
                </li>
               <li className="nav-item"><Link className="nav-link" to='/blogs'> 
                  Blogs            </Link> </li>
              </ul>
              
            </div>
          </div>
        </nav>
</div>
      </header>
    </div>

  )
}

export default Header
