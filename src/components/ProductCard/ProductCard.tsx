import React from 'react';
import './ProductCard.scss';
import '../RecommendedGoods/RecommendedGoods.scss';
import { Device } from '../../types/Device';

export const ProductCard: React.FC<Device> = ({
  images,
  name,
  priceDiscount,
  priceRegular,
  screen,
  capacity,
  ram,
}) => (
  <div className="product">
    <img src={images[0]} alt={name} className="product_images" />
    <h2 className="product_name">{name}</h2>

    <div className="product_price">
      <p className="product_price__discount">{priceDiscount}</p>
      <p className="product_price__regular">{priceRegular}</p>
    </div>

    <hr className="product_divider" />

    <div className="product_specs">
      <div className="product_specs__item">
        <p className="product_specs__label">Screen</p>
        <p className="product_specs__value">{screen}</p>
      </div>

      <div className="product_specs__item">
        <p className="product_specs__label">Capacity</p>
        <p className="product_specs__value">{capacity}</p>
      </div>

      <div className="product_specs__item">
        <p className="product_specs__label">RAM</p>
        <p className="product_specs__value">{ram}</p>
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
