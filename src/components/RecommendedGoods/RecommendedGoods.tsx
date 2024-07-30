import React, { useEffect, useState } from 'react';
import './RecommendedGoods.scss';
import { ProductCard } from '../ProductCard/ProductCard';
import { Device } from '../../types/Device';
import { getPhones } from '../../utils/api';

export const RecommendedGoods: React.FC = () => {
  const [phones, setPhones] = useState<Device[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchPhones = async () => {
    try {
      const phonesData = await getPhones();
      setPhones(phonesData);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to fetch phones:', error);
    }
  };

  useEffect(() => {
    fetchPhones();
  }, []);

  const isDisabledBack = currentIndex <= 0;
  const isDisabledNext = currentIndex >= phones.length - 4;

  const moveSlides = (direction: number) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return 0;
      if (newIndex > phones.length) return phones.length - 1;
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
          <button className="recommended_arrow" type="button" disabled={isDisabledBack} onClick={handlePrevClick}>
            <img className="recommended_arrow__left-default" src="/Icons/Chevron (Arrow Left).svg" alt="arrow left default" />
            <img className="recommended_arrow__left" src="/Icons/Chevron (Arrow Right)Dark.svg" alt="arrow left" />
          </button>
          <button className="recommended_arrow" type="button" disabled={isDisabledNext} onClick={handleNextClick}>
            <img className="recommended_arrow__right-default" src="/Icons/Chevron (Arrow Left).svg" alt="arrow right default" />
            <img className="recommended_arrow__right" src="/Icons/Chevron (Arrow Right)Dark.svg" alt="arrow right" />
          </button>
        </div>

      </div>

      <div className="goods">
        {phones.slice(currentIndex, currentIndex + 4).map((phone) => (
          <ProductCard
            key={phone.id}
            id={phone.id}
            category={phone.category}
            namespaceId={phone.namespaceId}
            name={phone.name}
            capacityAvailable={phone.capacityAvailable}
            capacity={phone.capacity}
            priceRegular={phone.priceRegular}
            priceDiscount={phone.priceDiscount}
            colorsAvailable={phone.colorsAvailable}
            color={phone.color}
            images={phone.images}
            description={phone.description}
            screen={phone.screen}
            resolution={phone.resolution}
            processor={phone.processor}
            ram={phone.ram}
            camera={phone.camera}
            zoom={phone.zoom}
            cell={phone.cell}
          />
        ))}
      </div>
    </>
  );
};
