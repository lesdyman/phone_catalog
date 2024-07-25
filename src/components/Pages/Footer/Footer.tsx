import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer: React.FC = () => (
  <footer className="footer">
    <NavLink to="/">
      <img src="/img/logo.png" alt="logo" className="footer__logo" />
    </NavLink>
    <div className="footer__container">
      <NavLink to="https://github.com/fe-apr24-team2">GITHUB</NavLink>
      <NavLink to="/">CONTACTS</NavLink>
      <NavLink to="/">RIGHTS</NavLink>
    </div>
    <NavLink to="/">Back to top</NavLink>
  </footer>
);
