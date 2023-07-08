import React from 'react';
import '../style/nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header className="nav-head">
      <div className="nav">
        <p>Bookstore CMS</p>
        <ul className="nav-items">
          <li className="nav-link"><Link to="/">BOOKS</Link></li>
          <li className="nav-link"><Link to="/categories">CATEGORIES</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Nav;
