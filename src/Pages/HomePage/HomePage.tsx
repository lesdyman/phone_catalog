import React, { useEffect, useState } from 'react';
import './HomePage.scss';
import { NavLink } from 'react-router-dom';
import { RecommendedGoods } from '../../components/RecommendedGoods/RecommendedGoods';
import { HomePageSliderMain } from '../../components/HomePageSliderMain/HomePageSliderMain';
import { Product } from '../../types/Product';
import { getProducts } from '../../utils/api';

export const HomePage: React.FC = () => {
  const [allStuff, setAllStuff] = useState<Product[]>([]);

  const getAllStuff = async () => {
    try {
      const allWeHave = await getProducts();
      setAllStuff(allWeHave);
    } catch {
      throw new Error('Cannot load all stuff on homepage');
    }
  };

  useEffect(() => {
    getAllStuff();
  }, []);

  const countStuff = () => {
    const inPhoneCattegory = allStuff.filter((device) => device.category === 'phones');
    const inTabletCategory = allStuff.filter((device) => device.category === 'tablets');
    const inAccessories = allStuff.filter((device) => device.category === 'accessories');

    return { inPhoneCattegory, inTabletCategory, inAccessories };
  };

  return (
    <div className="homepage">
      <div className="homepage__title--welcome">
        <h1 className="homepage__title-h1">Welcome to Nice Gadgets store!</h1>
      </div>

      <div className="slider-container">
        <HomePageSliderMain />
      </div>

      <section className="new-models">
        <div className="recomendation-block">
          <RecommendedGoods title="Brand new models" sortType="model" />
        </div>
      </section>

      <section>
        <h2 className="homepage__title-h2">Shop by category</h2>
        <div className="categories">
          <div className="categories__items">
            <NavLink to="/phones" className="categories__item">
              <div className="categories__image categories__image--phones" />
              <div className="categories__bottom">
                <h3 className="categories__name">Mobile phones</h3>
                <p className="categories__description">{`${countStuff().inPhoneCattegory.length} models`}</p>
              </div>
            </NavLink>
            <NavLink to="/tablets" className="categories__item">
              <div className="categories__image categories__image--tablets" />
              <div className="categories__bottom">
                <h3 className="categories__name">Tablets</h3>
                <p className="categories__description">{`${countStuff().inTabletCategory.length} models`}</p>
              </div>
            </NavLink>

            <NavLink to="/accessories" className="categories__item">
              <div className="categories__image categories__image--accessories" />
              <div className="categories__bottom">
                <h3 className="categories__name">Accessories</h3>
                <p className="categories__description">{`${countStuff().inAccessories.length} models`}</p>
              </div>
            </NavLink>
          </div>
        </div>
      </section>

      <div className="recomendation-block">
        <RecommendedGoods title="Hot prices" sortType="price" />
      </div>
      {/* <section className="homepage__hot-prices">
      <div className="hot-prices-container" />
    </section> */}
    </div>
  );
};
