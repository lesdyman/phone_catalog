import React from 'react';
import {
  NavLink, Route, HashRouter as Router, Routes,
} from 'react-router-dom';
import { HomePage } from './components/Pages/HomePage/HomePage.tsx';
import { PhonesPage } from './components/Pages/PhonePage/PhonePage.tsx';
import { PageNotFound } from './components/Pages/PageNotFound/PageNotFound.tsx';
import { AccessoriesPage } from './components/Pages/AccessoriesPage/AccessoriesPage.tsx';
import { TabletsPage } from './components/Pages/TabletsPage/TabletsPage.tsx';
import { Footer } from './components/Pages/Footer/Footer.tsx';

export const App: React.FC = () => (
  <Router>
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
    <Footer />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/phones" element={<PhonesPage />} />
      <Route path="/tablets" element={<TabletsPage />} />
      <Route path="/accessories" element={<AccessoriesPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
);
