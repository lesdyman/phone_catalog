/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header: React.FC = () => (
  <nav>
    <ul>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/phones"
          className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
        >
          Phones
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tablets"
          className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
        >
          Tablets
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/accessories"
          className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
        >
          Accessories
        </NavLink>
      </li>
    </ul>
  </nav>
);
