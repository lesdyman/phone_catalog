/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCallback, useContext, useEffect, useState } from 'react';
import './BaseLayout.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { Device } from '../../types/Device';
import {
  getAccessories,
  getPhones,
  getProducts,
  getTablets,
} from '../../utils/api';
import { CartContext } from '../../utils/CartContext';
import { Product } from '../../types/Product';
import { ItemSlider } from '../../components/ItemCard-slider/ItemSlider';
import { RecommendedGoods } from '../../components/RecommendedGoods/RecommendedGoods';
import { useFavorites } from '../../utils/useFavorites';

export const BaseLayout = () => {
  const [gadget, setGadget] = useState<Device>();
  const [product, setProduct] = useState<Product | undefined>();
  const context = useContext(CartContext);
  const favorites = useFavorites();
  const location = useLocation();
  const navigate = useNavigate();

  if (!context) {
    throw new Error('context is not defined');
  }

  const { cart, addToCart } = context;

  const inCart = cart.find((el) => el.itemId === gadget?.id);

  const detectCategory = (place: string) => {
    if (place === '/#') {
      return getPhones();
    }

    switch (place.split('/')[1]) {
      case 'phones':
        return getPhones();

      case 'tablets':
        return getTablets();

      case 'accessories':
        return getAccessories();

      default:
        return undefined;
    }
  };

  const loadPhones = useCallback(async () => {
    try {
      const result = await detectCategory(location.pathname);
      if (result) {
        setGadget(
          result.find((device) => location.pathname.split('/').includes(device.id)),
        );
      }
    } catch {
      throw new Error('Failed loading phone');
    }
  }, [location.pathname]);

  useEffect(() => {
    loadPhones();
    window.scrollTo(0, 0);
  }, [location, loadPhones]);

  const getProduct = useCallback(async () => {
    try {
      const products = await getProducts();
      const productId = location.pathname.split('/').pop();

      const result = products.find((el) => el.itemId === productId);

      if (!result) {
        throw new Error('Product does not exist');
      }

      setProduct(result);
    } catch (error) {
      throw new Error('Error fetching product:');
    }
  }, [location.pathname]);

  useEffect(() => {
    getProduct();
  }, [location, getProduct]);

  const activeColor = () => {
    const currentColor = location.pathname.split('-');
    return currentColor
      .filter(
        (_el, index) => index === currentColor.length - 1
          || index === currentColor.length - 2,
      )
      .join(' ');
  };

  const activeCapacity = () => {
    const currentCapacity = location.pathname.split('-');

    return location.pathname.includes('space-gray')
      ? currentCapacity[currentCapacity.length - 3].toLowerCase()
      : currentCapacity[currentCapacity.length - 2].toLowerCase();
  };

  const home = () => {
    window.location.href = '/';
  };

  const phonesLink = () => {
    window.location.href = '#/phones';
  };

  // const redirectByColor = (color: string) => {
  //   const pathSegments = location.pathname.split('/');
  //   if (gadget?.color) {
  //     pathSegments[pathSegments.length - 1] = pathSegments[
  //       pathSegments.length - 1
  //     ].replace(gadget.color, color);
  //     const newPath = pathSegments.join('/');
  //     navigate(newPath);
  //     window.location.reload();
  //   }
  // };

  const redirectByColor = (color: string) => {
    navigate(
      `${gadget?.namespaceId}-${gadget?.capacity.toLowerCase()}-${color.replace(' ', '-')}`,
    );
    window.location.reload();
  };

  const redirectByRAM = (capacity: string) => {
    const pathSegments = location.pathname.split('-');
    if (location.pathname.includes('space-gray')) {
      pathSegments[pathSegments.length - 3] = capacity.toLowerCase();
    } else {
      pathSegments[pathSegments.length - 2] = capacity.toLowerCase();
    }
    const newPath = pathSegments.join('-');
    navigate(newPath);
    window.location.reload();
  };

  const addToFavorites = () => {
    if (product) {
      favorites.addItem(product);
    }
  };

  return (
    <div className="baseLayout" id="top">
      <div className="baseContainer">
        <div className="basePath">
          <div className="home" onClick={home} style={{ cursor: 'pointer' }} />
          <div className="arrow" />
          <div
            className="category"
            onClick={phonesLink}
            style={{ cursor: 'pointer' }}
          >
            Phones
          </div>
          <div className="arrow" />
          <div className="model">{gadget?.name}</div>
        </div>

        <button type="button" className="backButton">
          Back
        </button>

        <h1 className="modelName">{gadget?.name}</h1>
        <div className="modelContainer">
          <div className="sliderContainer">
            <ItemSlider images={gadget?.images} />
          </div>
          <div className="selectModel">
            <div className="colorsAvaible">
              <p className="avaible">Avaible colors</p>
              <div className="colors">
                {gadget?.colorsAvailable.map((color) => (
                  <div
                    className={`color ${color.replace(' ', '')} ${activeColor().includes(` ${color}`) ? 'activeColor' : ''}`}
                    key={color}
                    onClick={() => redirectByColor(color)}
                    style={{ cursor: 'pointer' }}
                  />
                ))}
              </div>
            </div>

            <div className="line" />

            <div className="capacity">
              <div className="avaible">Select capacity</div>
              <div className="chooseCapacity">
                {gadget?.capacityAvailable.map((capacity) => (
                  <div
                    className={`ram ${capacity.toLowerCase() === activeCapacity() ? 'activeCapacity' : ''}`}
                    key={capacity}
                    onClick={() => redirectByRAM(capacity)}
                    style={{ cursor: 'pointer' }}
                  >
                    {capacity}
                  </div>
                ))}
              </div>
            </div>

            <div className="line" />

            <div className="modelPrice">
              <p className="product_price__discount">{`$${gadget?.priceDiscount}`}</p>
              <p className="product_price__regular">{`$${gadget?.priceRegular}`}</p>
            </div>

            <div className="actionButtons">
              <button
                type="button"
                className={classNames('addToCart', {
                  added: inCart?.itemId === gadget?.id,
                })}
                onClick={() => {
                  if (product) {
                    addToCart(product);
                  }
                }}
              >
                {inCart?.itemId === gadget?.id ? 'Added' : 'Add to cart'}
              </button>
              <button
                type="button"
                className={classNames('addToFavorite', {
                  activeFavorites: favorites.favorites.some(
                    (el) => el.itemId === gadget?.id,
                  ),
                })}
                onClick={addToFavorites}
                aria-label="addToFavorite"
              />
            </div>

            <div className="info">
              <div className="screen">
                <span className="infoTitle">Screen</span>
                <span className="modelInfo">{gadget?.screen}</span>
              </div>
              <div className="resolution">
                <span className="infoTitle">Resolution</span>
                <span className="modelInfo">{gadget?.resolution}</span>
              </div>
              <div className="processor">
                <span className="infoTitle">Processor</span>
                <span className="modelInfo">{gadget?.processor}</span>
              </div>
              <div className="memory">
                <span className="infoTitle">RAM</span>
                <span className="modelInfo">{gadget?.ram}</span>
              </div>
            </div>
          </div>

          <div className="modelId">ID: 802390</div>
        </div>

        <div className="infoBlocks">
          <div className="aboutInfo">
            <h1 className="blockTitle">About</h1>

            <div className="breakLine" />

            {gadget?.description.map((el) => (
              <div key={el.title} className="general">
                <h1 className="infoHead">{el.title}</h1>
                <div className="infoFilling">
                  {el.text.map((text) => (
                    <p key={text.length}>{text}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="techSpecsInfo">
            <h1 className="blockTitle">Tech specs</h1>

            <div className="breakLine" />

            <div className="techspecsWrapper">
              <div className="wrap">
                <li className="disableList">
                  <p className="techTitle">Screen</p>
                  <p className="spec">{gadget?.screen}</p>
                </li>
                <li className="disableList">
                  <p className="techTitle">Resolution</p>
                  <p className="spec">{gadget?.resolution}</p>
                </li>
                <li className="disableList">
                  <p className="techTitle">Processor</p>
                  <p className="spec">{gadget?.processor}</p>
                </li>
                <li className="disableList">
                  <p className="techTitle">RAM</p>
                  <p className="spec">{gadget?.ram}</p>
                </li>
                <li className="disableList">
                  <p className="techTitle">Built in memory</p>
                  <p className="spec">{gadget?.capacity}</p>
                </li>
                <li className="disableList">
                  <p className="techTitle">Camera</p>
                  <p className="spec">{gadget?.camera}</p>
                </li>
                <li className="disableList">
                  <p className="techTitle">Zoom</p>
                  <p className="spec">{gadget?.zoom}</p>
                </li>
                <li className="disableList">
                  <p className="techTitle">Cell</p>
                  <p className="spec">{gadget?.cell.join(', ')}</p>
                </li>
              </div>
            </div>
          </div>
        </div>
        <RecommendedGoods
          title="You also may like"
          sortType="inputPrice"
          price={gadget?.priceRegular}
        />
      </div>
    </div>
  );
};
