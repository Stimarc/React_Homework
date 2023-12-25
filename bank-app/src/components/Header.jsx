import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const Header = () => {
  const { pathname } = useLocation();

  const checkActive = (path) => {
    return pathname === path ? 'menu-item__link menu-item__link_active' : 'menu-item__link';
  };

  return (
    <header className='header'>
      <nav>
        <ul className="menu-list">
          <li className="menu-item" key="/">
            <NavLink className={checkActive('/')} to="/">Cards</NavLink>
          </li>
          <li className='menu-item' key="/clients">
            <NavLink className={checkActive('/clients')} to="/clients">Clients</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};