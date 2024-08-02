import React from 'react';
import './HomePage.scss';
import { NavLink } from 'react-router-dom';

export const HomePage: React.FC = () => (
  <div className="homepage">
    <div className="homepage__title">
      <h1 className="homepage__title-h1">Welcome to Nice Gadgets store!</h1>
    </div>

    <h2 className="homepage__title-h2">Now avalible in our store</h2>
    <section>
      <div className="slider-container" />
    </section>

    <h2 className="homepage__title-h2">Brand new models</h2>
    <section className="new-models">
      <div className="new-models-container" />
    </section>

    <h2 className="homepage__title-h2">Shop by category</h2>
    <section className="categories">
      <div className="categories__items">
        <NavLink to="/phones" className="categories__item">
          <div className="categories__image categories__image--phones" />
          <div className="categories__bottom">
            <h3 className="categories__name">Mobile phones</h3>
            <p className="categories__description">95 models</p>
          </div>
        </NavLink>
        <NavLink to="/tablets" className="categories__item">
          <div className="categories__image categories__image--tablets" />
          <div className="categories__bottom">
            <h3 className="categories__name">Tablets</h3>
            <p className="categories__description">24 models</p>
          </div>
        </NavLink>
        <NavLink to="/accessories" className="categories__item">
          <div className="categories__image categories__image--accessories" />
          <div className="categories__bottom">
            <h3 className="categories__name">Accessories</h3>
            <p className="categories__description">100 models</p>
          </div>
        </NavLink>
      </div>
    </section>

    <h2 className="homepage__title-h2">Hot prices</h2>
    <section className="homepage__hot-prices">
      <div className="hot-prices-container" />
    </section>
  </div>
);
