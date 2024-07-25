import React from 'react';
import './ProductCard.scss';

type Product = {
  images: string;
  name: string;
  priceRegular: string;
  priceDiscount: string;
  screen: string;
  capacity: string;
  ram: string;
};

const product: Product = {
  images: 'img/phones/apple-iphone-14-pro/gold/00.webp',
  name: 'Apple iPhone 14 Pro 1TB Gold',
  priceRegular: '$1740',
  priceDiscount: '$1520',
  screen: '6.1" OLED',
  capacity: '1 TB',
  ram: '6 GB',
};

export const ProductCard: React.FC = () => (
  <div className="product">
    <img src={product.images} alt={product.name} className="product_images" />
    <h2 className="product_name">{product.name}</h2>

    <div className="product_price">
      <p className="product_price__discount">{product.priceDiscount}</p>
      <p className="product_price__regular">{product.priceRegular}</p>
    </div>

    <hr className="product_divider" />

    <div className="product_specs">
      <div className="product_specs__item">
        <p className="product_specs__label">Screen</p>
        <p className="product_specs__value">{product.screen}</p>
      </div>

      <div className="product_specs__item">
        <p className="product_specs__label">Capacity</p>
        <p className="product_specs__value">{product.capacity}</p>
      </div>

      <div className="product_specs__item">
        <p className="product_specs__label">RAM</p>
        <p className="product_specs__value">{product.ram}</p>
      </div>
    </div>

    <div className="product_button">
      <button type="button" className="product_button__add">
        <p className="product_button__text product_button__text-add">
          Add to card
        </p>
        <p className="product_button__text product_button__text-added">Added</p>
      </button>
      <button type="button" aria-label="Like" className="product_button__like">
        <img
          className="product_button__like-image product_button__like-image-white"
          src="/img/icons/heartLike.svg"
          alt="Like button icon white"
        />
        <img
          className="product_button__like-image product_button__like-image-red"
          src="/img/icons/redHeartLike.svg"
          alt="Like button icon red"
        />
      </button>
    </div>
  </div>
);
