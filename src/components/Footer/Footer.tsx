/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

export const Footer: React.FC = () => (
  <footer className="footer">
    <NavLink to="/">
      <img src="/img/logo.png" alt="logo" className="footer__logo" />
    </NavLink>
    <div className="footer__container">
      <NavLink className="footer__link" to="https://github.com/fe-apr24-team2">
        Github
      </NavLink>
      <NavLink className="footer__link" to="/">
        Contacts
      </NavLink>
      <NavLink className="footer__link" to="/">
        Rights
      </NavLink>
    </div>
    <NavLink to="/">Back to top</NavLink>
  </footer>
);
