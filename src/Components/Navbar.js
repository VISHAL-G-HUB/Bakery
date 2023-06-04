import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHome } from 'react-icons/fa';

function Navbar() {
  return (
    <>
      <div className='hero'>
        <div class="content">
          <h1>The Cake factory</h1>
          <p>
            Try Something new!
            </p>
            <div  className='navbar-brand'>
            <Link className='Link' to="/Cart"> <FaShoppingCart /></Link>
            <Link className='Link' to="/"> <FaHome /></Link>
            </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;