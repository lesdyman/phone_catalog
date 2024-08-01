/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import './ProductCard.scss';
// import { Device } from '../../types/Device';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types/Product';
import { CartContext } from '../../utils/CartContext';

type Props = {
  phone: Product;
};

export const ProductCard: React.FC<Props> = ({ phone }) => {
  const navigate = useNavigate();
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('CartContext must be used within a CartProvider');
  }

  const { cart, addToCart } = context;

  const inCart = cart.find((el) => el.itemId === phone.itemId);

  const relocate = () => {
    navigate(`${phone.itemId}`);
  };

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
  };

  const handleAddToCart = () => {
    addToCart(phone);
  };

  return (
    <div
      className="product"
      role="button"
      tabIndex={0}
      onClick={relocate}
      onMouseEnter={(e) => {
        e.currentTarget.style.cursor = 'pointer';
      }}
    >
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
        <button
          type="button"
          className="product_button__add"
          onClick={(e) => {
            handleButtonClick(e);
            handleAddToCart();
          }}
        >
          {inCart?.itemId === phone.itemId ? (
            <p className="product_button__text product_button__text-added">
              Added
            </p>
          ) : (
            <p className="product_button__text product_button__text-add">
              Add to cart
            </p>
          )}
        </button>
        <button
          type="button"
          aria-label="Like"
          className="product_button__like"
          onClick={handleButtonClick}
        >
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
};
