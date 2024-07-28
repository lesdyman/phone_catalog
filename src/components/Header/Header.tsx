import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header: React.FC = () => (
  <nav className="navigation">
    <ul className="navigation_list">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''} navigation_list-link`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/phones"
          className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''} navigation_list-link`}
        >
          Phones
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tablets"
          className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''} navigation_list-link`}
        >
          Tablets
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/accessories"
          className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''} navigation_list-link`}
        >
          Accessories
        </NavLink>
      </li>
    </ul>
  </nav>
);
