import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header className="nav">
      <div className="logo">
        <p>Bookstore CMS</p>
      </div>
      <ul className="nav-items">
        <li className="nav-link"><Link to="/">Books</Link></li>
        <li className="nav-link"><Link to="/categories">categories</Link></li>
      </ul>
    </header>
  );
}

export default Nav;
