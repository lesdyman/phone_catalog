import { ProductCard } from '../ProductCard/ProductCard';
import './FavouriteItems.scss';
import { useFavorites } from '../../utils/useFavorites';

export const FavouriteItems = () => {
  const context = useFavorites();
  return (
    <div className="component" id="top">
      <div className="component__container">
        <div className="component__path path">
          <a className="path__home-image" href="/">
            <img src="/Icons/Home.svg" alt="Home icon" />
          </a>
          <div className="path__arrow">
            <img src="/Icons/Chevron (Arrow Right).svg" alt="Arrow right" />
          </div>
          <div className="path__page">Favourites</div>
        </div>
        <div className="component__header">
          <h1 className="component__title">Favourites</h1>
        </div>
        <div className="component__models-number">
          <p>... models</p>
        </div>
        <div className="component__wrap">
          {context.favorites.length ? (
            <div className="component__list list">
              {context.favorites.map((item) => (
                <ProductCard product={item} key={item.id} />
              ))}
            </div>
          ) : (
            <div className="noItems">
              <h1 className="noItemsTitle">No favorite items</h1>
            </div>
          )}
        </div>
        <div className="marginBottom" />
      </div>
    </div>
  );
};
