import React from 'react';
import {
  Link, Route, HashRouter as Router, Routes,
} from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage.tsx';
import { PhonesPage } from './components/PhonePage/PhonePage.tsx';
import { PageNotFound } from './components/PageNotFound/PageNotFound.tsx';

export const App: React.FC = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/phones">Phones</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/phones" element={<PhonesPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
);
