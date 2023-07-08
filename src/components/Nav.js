import React from 'react';
import '../style/nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <header className="nav-head">
      <div className="nav">
        <p>Bookstore CMS</p>
        <ul className="nav-items">
          <li className="nav-link"><NavLink to="/">BOOKS</NavLink></li>
          <li className="nav-link"><NavLink to="/categories">CATEGORIES</NavLink></li>
        </ul>
      </div>
    </header>
  );
}

export default Nav;
