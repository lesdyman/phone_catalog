import React, { useState, useEffect } from 'react';
import './CartItem.scss';
import { useCart } from '../../utils/useCart';
import { Product } from '../../types/Product';

type Props = {
  product: Product;
};

export const CartItem: React.FC<Props> = ({ product }) => {
  const { cart } = useCart();
  const [isMinusDisabled, setIsMinusDisabled] = useState(cart.length < 1);
  const { changeItemCount, removeFromCart } = useCart();

  useEffect(() => {
    setIsMinusDisabled(false);
  }, [cart]);

  return (
    <div className="item">
      <div className="item_desc">
        <button
          type="button"
          className="item_image__cross"
          onClick={() => removeFromCart(product.id)}
          aria-label="Remove from cart"
        >
          <img src="/img/icons/cross.svg" alt="gray cross" />
        </button>

        <img
          src={product.image}
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
            onClick={() => changeItemCount(product.id, product.quantity - 1)}
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
          <p className="item_count">{product.quantity}</p>
          <button
            type="button"
            className="item_button item_button__add"
            onClick={() => changeItemCount(product.id, product.quantity + 1)}
          >
            <img
              className="item_button__image"
              src="/img/icons/plus.svg"
              alt="add"
            />
          </button>
        </div>

        <h3 className="item_price">{`$${product.price}`}</h3>
      </div>
    </div>
  );
};
