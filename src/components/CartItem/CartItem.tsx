import React, { useState } from 'react';
import './CartItem.scss';

type Product = {
  images: string;
  name: string;
  priceDiscount: string;
};

const product: Product = {
  images: 'img/phones/apple-iphone-14-pro/gold/00.webp',
  name: 'Apple iPhone 14 Pro 1TB Gold',
  priceDiscount: '$1520',
};

export const CartItem: React.FC = () => {
  const [isMinusDisabled, setIsMinusDisabled] = useState(true);

  const handlePlusClick = () => {
    setIsMinusDisabled(false);
  };

  return (
    <div className="item">
      <div className="item_desc">
        <img
          className="item_image__cross"
          src="/img/icons/cross.svg"
          alt="gray cross"
        />

        <img
          src={product.images}
          alt={product.name}
          className="item_image__phone"
        />

        <p className="item_name">{product.name}</p>
      </div>

      <div className="item_counter">
        <div className="item_buttons">
          <button
            type="button"
            className="item_button item_button__subtract"
            disabled={isMinusDisabled}
          >
            <img
              className="item_button__image-black"
              src="/img/icons/minusBlack.svg"
              alt="subtract"
            />
            <img
              className="item_button__image-gray"
              src="/img/icons/minusGray.svg"
              alt="disabled minus"
            />
          </button>
          <p className="item_count">1</p>
          <button
            type="button"
            className="item_button item_button__add"
            onClick={handlePlusClick}
          >
            <img
              className="item_button__image"
              src="/img/icons/plus.svg"
              alt="add"
            />
          </button>
        </div>

        <h3 className="item_price">{product.priceDiscount}</h3>
      </div>
    </div>
  );
};
