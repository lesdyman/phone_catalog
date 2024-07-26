/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import './Cart.scss';

export const Cart = () => {
  const [orderDone, setOrderDone] = useState(false);

  function goBack() {
    window.history.back();
  }

  function goToHomePage() {
    document.body.style.overflow = '';
    window.location.href = '/';
  }

  function orderAccept() {
    document.body.style.overflow = 'hidden';
    setOrderDone(true);
  }

  return (
    <div className="component">
      <div className="container">
        <button type="button" className="backButton" onClick={goBack}>
          Back
        </button>
        <h1 className="title">Cart</h1>
        <div className="interface">
          <div className="cartGrid">
            <div className="NewExample"></div>
            <div className="NewExample"></div>
            <div className="NewExample"></div>
            <div className="NewExample"></div>
            <div className="NewExample"></div>
            <div className="NewExample"></div>
            <div className="NewExample"></div>
            <div className="NewExample"></div>
            <div className="NewExample"></div>
            <div className="NewExample"></div>
            <div className="NewExample"></div>
          </div>
          <div className="orderInterface">
            <h1 className="totalPrice">$2657</h1>
            <div className="itemsCount">Total for 3 items</div>
            <div className="line"></div>
            <button
              type="button"
              className="checkout"
              onClick={orderAccept}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      {orderDone && (
        <div className="modal">
          <div className="content">
            <div className="doneLogo" />
            <div className="doneTitle">
              <h1 className="orderTitle">Order accepted</h1>
              <h2 className="orderTitle">Wait for our call</h2>
            </div>
            <button
              type="button"
              className="homeButton"
              onClick={goToHomePage}
            />
          </div>
        </div>
      )}
    </div>
  );
};
