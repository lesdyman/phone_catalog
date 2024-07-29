import React from 'react';
import './ProductCard.scss';
// import { Device } from '../../types/Device';
import { Product } from '../../types/Product';

type Props = {
  phone: Product;
};

export const ProductCard: React.FC<Props> = ({ phone }) => (
  <div className="product">
    <img
      src={phone.image}
      alt={phone.name}
      className="product_images list__item example"
    />
    <h2 className="product_name">{phone.name}</h2>

    <div className="product_price">
      <p className="product_price__discount">{`$${phone.price}`}</p>
      <p className="product_price__regular">{`$${phone.fullPrice}`}</p>
    </div>

    <hr className="product_divider" />

    <div className="product_specs">
      <div className="product_specs__item">
        <p className="product_specs__label">Screen</p>
        <p className="product_specs__value">{phone.screen}</p>
      </div>

      <div className="product_specs__item">
        <p className="product_specs__label">Capacity</p>
        <p className="product_specs__value">{phone.capacity}</p>
      </div>

      <div className="product_specs__item">
        <p className="product_specs__label">RAM</p>
        <p className="product_specs__value">{phone.ram}</p>
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
