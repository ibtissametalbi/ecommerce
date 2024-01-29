import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='bg-dark p-3 d-flex justify-content-center'>
      <Link className='fw-bold text-decoration-none text text-white pe-2' to="/">Home</Link>
      <Link className='fw-bold text-decoration-none text text-white' to="/Cart">Panier</Link>
    </div>
  );
}

export default Header;