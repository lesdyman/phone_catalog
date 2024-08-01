import React, { useCallback, useEffect, useState } from 'react';
import './RecommendedGoods.scss';
import { ProductCard } from '../ProductCard/ProductCard';
import { getProducts } from '../../utils/api';
import { Product } from '../../types/Product';

type Props = {
  price: number | undefined;
}

export const RecommendedGoods: React.FC<Props> = ({ price }) => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchPhones = useCallback(async () => {
    if (price === undefined) {
      return;
    }

    try {
      const phonesData = (await getProducts()).filter((prod) => prod.category === 'phones');

      const alikePhones = phonesData.filter((phone) => phone.price >= price + 100);
      setPhones(alikePhones);
    } catch (error) {
      throw new Error('Failed to fetch phones:');
    }
  }, [price]);

  useEffect(() => {
    fetchPhones();
  }, [fetchPhones]);

  const getVisibleItems = () => {
    if (window.innerWidth <= 480) {
      return 2;
    }

    if (window.innerWidth <= 768) {
      return 3;
    }

    return 4;
  };

  const getItemsPerPage = () => {
    const visibleItems = getVisibleItems();

    return visibleItems + 0.5;
  };

  const itemsPerPage = getItemsPerPage();
  const itemsRemaining = phones.length - (currentIndex + itemsPerPage);

  const isDisabledBack = currentIndex <= 0;
  const isDisabledNext = itemsRemaining <= 0;

  const moveSlides = (direction: number) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return 0;
      if (newIndex > phones.length) {
        return phones.length - 1;
      }
      return newIndex;
    });
  };

  const handleNextClick = () => {
    if (!isDisabledNext) {
      moveSlides(1);
    }
  };

  const handlePrevClick = () => {
    if (!isDisabledBack) {
      moveSlides(-1);
    }
  };

  return (
    <>
      <div className="recommended">
        <h1 className="recommended_title">You may also like</h1>
        <div className="recommended_buttons">
          <button
            className="recommended_arrow"
            type="button"
            disabled={isDisabledBack}
            onClick={handlePrevClick}
          >
            <img
              className="recommended_arrow__left-default"
              src="/Icons/Chevron (Arrow Left).svg"
              alt="arrow left default"
            />
            <img
              className="recommended_arrow__left"
              src="/Icons/Chevron (Arrow Right)Dark.svg"
              alt="arrow left"
            />
          </button>
          <button
            className="recommended_arrow"
            type="button"
            disabled={isDisabledNext}
            onClick={handleNextClick}
          >
            <img
              className="recommended_arrow__right-default"
              src="/Icons/Chevron (Arrow Left).svg"
              alt="arrow right default"
            />
            <img
              className="recommended_arrow__right"
              src="/Icons/Chevron (Arrow Right)Dark.svg"
              alt="arrow right"
            />
          </button>
        </div>
      </div>

      <div className="goods">
        {phones
          .slice(currentIndex, currentIndex + getItemsPerPage())
          .map((phone) => (
            <ProductCard phone={phone} />
          ))}
      </div>
    </>
  );
};
