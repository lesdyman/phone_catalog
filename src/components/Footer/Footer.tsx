import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

export const Footer: React.FC = () => {
  const addScrollToTopHandler = () => {
    const link = document.querySelector('.back-to-top__link');

    if (!link) return undefined;

    const handleScroll = (e: Event) => {
      e.preventDefault();
      document.querySelector('#top')?.scrollIntoView({ behavior: 'smooth' });
    };

    link.addEventListener('click', handleScroll);

    return () => {
      link.removeEventListener('click', handleScroll);
    };
  };

  useEffect(() => {
    addScrollToTopHandler();
  }, []);

  return (
    <footer className="footer">
      <a href="/home" className="footer__logo-link">
        <img src="/img/logo.png" alt="logo" className="footer__logo" />
      </a>
      <div className="footer__links">
        <NavLink
          className="footer__link footer__item"
          to="https://github.com/fe-apr24-team2"
        >
          Github
        </NavLink>
        <NavLink className="footer__link footer__item" to="/">
          Contacts
        </NavLink>
        <NavLink className="footer__link footer__item" to="/">
          Rights
        </NavLink>
      </div>
      <div className="back-to-top">
        <span className="footer__item back-to-top__text">Back to top</span>
        <a className="back-to-top__link" href="#top">
          <img
            src="/img/slider-button.png"
            alt="slider-button"
            className="back-to-top__logo"
          />
        </a>
      </div>
    </footer>
  );
};
