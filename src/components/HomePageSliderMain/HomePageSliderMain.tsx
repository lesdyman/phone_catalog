import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React from 'react';
import classNames from 'classnames';

import styles from './HomePageSliderMain.module.scss';

export const HomePageSliderMain: React.FC = () => {
  return (
    <div id="top">
      <div className={`main__swiper ${styles.swiper}`}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: `.${styles.swiper__next}`,
            prevEl: `.${styles.swiper__prev}`,
          }}
          pagination={{
            el: `.${styles.swiper__pagination}`,
            clickable: true,
            bulletClass: `${styles['swiper-pagination-bullet']}`,
            bulletActiveClass: `${styles['swiper-pagination-bullet-active']}`,
          }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide className={styles.swiper__slide}>
            <a
              href="/#/phones/apple-iphone-14-512gb-midnight"
              aria-label="Slide 1 image"
              className={`${styles.swiper__image} ${styles['swiper__image--1']}`}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper__slide}>
            <a
              href="/#/tablets"
              aria-label="Slide 2 image"
              className={`${styles.swiper__image} ${styles['swiper__image--2']}`}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper__slide}>
            <a
              href="/#/accessories"
              aria-label="Slide 3 image"
              className={`${styles.swiper__image} ${styles['swiper__image--3']}`}
            />
          </SwiperSlide>
        </Swiper>
        <div
          className={classNames(styles.swiper__prev, 'swiper__Button__Prev')}
        />
        <div
          className={classNames(styles.swiper__next, 'swiper__Button__Next')}
        />
        <div
          className={classNames(styles.swiper__pagination, 'swiper-pagination')}
        />
      </div>
    </div>
  );
};
