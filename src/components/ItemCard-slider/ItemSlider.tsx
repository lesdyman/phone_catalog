/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './ItemSlider.scss';
import { useState } from 'react';

import photo1 from '../../../public/img/phones/apple-iphone-11/green/00.webp';
import photo2 from '../../../public/img/phones/apple-iphone-11/green/01.webp';
import photo3 from '../../../public/img/phones/apple-iphone-11/green/02.webp';
import photo4 from '../../../public/img/phones/apple-iphone-11/green/03.webp';

const photos = [photo1, photo2, photo3, photo4];

export const ItemSlider = () => {
  const [mainPhoto, setMainPhoto] = useState(photo1);
  const [selectedPhoto, setSelectedPhoto] = useState(photo1);
  const [isFading, setIsFading] = useState(false);

  const handleClick = (photo: string) => {
    setIsFading(true);
    setTimeout(() => {
      setMainPhoto(photo);
      setSelectedPhoto(photo);
      setIsFading(false);
    }, 300);
  };

  return (
    <div className="slider">
      <div className="slider__preview-pictures">
        <Swiper
          spaceBetween={16}
          direction="vertical"
          slidesPerView={4}
          freeMode
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo}>
              <img
                className={`slider__preview-pictures-img ${
                  selectedPhoto === photo ? 'selected' : ''
                }`}
                src={photo}
                alt=""
                onClick={() => handleClick(photo)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="slider__main-photo">
        <img
          className={`slider__main-photo-img ${isFading ? 'hidden' : ''}`}
          src={mainPhoto}
          alt=""
        />
      </div>
    </div>
  );
};
