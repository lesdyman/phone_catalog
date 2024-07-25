/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/react-in-jsx-scope */
import { SelectComponent } from '../../shared/ui/Select/Select.tsx';
import './Grid.scss';

const SortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'latest', label: 'Latest' },
];

const onPageCountOptions = [
  { value: '10', label: '10' },
  { value: '20', label: '20' },
  { value: '30', label: '30' },
];

export const Grid = () => {
  return (
    <div className="component">
      <div className="component__container">
        <div className="component__path path">
          <a className="path__home-image" href="home">
            <img src="/Icons/Home.svg" alt="Home icon" />
          </a>
          <div className="path__arrow">
            <img src="/Icons/Chevron (Arrow Right).svg" alt="Arrow right" />
          </div>
          <div className="path__page">Phones</div>
        </div>
        <div className="component__header">
          <h1 className="component__title">Mobile phones</h1>
        </div>
        <div className="component__models-number">
          <p>95 models</p>
        </div>
        <div className="component__list-params list-params">
          <span className="list-params__sort-by">
            <p className="list-params__sort-title">Sort by</p>
            <SelectComponent option={SortOptions} />
          </span>
          <span className="list-params__items-on-page">
            <p className="list-params__sort-title">Items on page</p>
            <SelectComponent option={onPageCountOptions} />
          </span>
        </div>
        <div className="component__wrap">
          <div className="component__list list">
            <div className="list__item example" />
            <div className="list__item example" />
            <div className="list__item example" />
            <div className="list__item example" />
            <div className="list__item example" />
            <div className="list__item example" />
            <div className="list__item example" />
            <div className="list__item example" />
            <div className="list__item example" />
            <div className="list__item example" />
            <div className="list__item example" />
            <div className="list__item example" />
            <div className="list__item example" />
            <div className="list__item example" />
            <div className="list__item example" />
            <div className="list__item example" />
            <div className="list__item example" />
            <div className="list__item example" />
            <div className="list__item example" />
            <div className="list__item example" />
            <div className="list__item example" />
          </div>
        </div>
        <div className="component__nav-wrap nav-wrap">
          <button className="nav-wrap__arrow-back" type="button" />
          <button className="nav-wrap__page" type="button">
            1
          </button>
          <button className="nav-wrap__page" type="button">
            2
          </button>
          <button className="nav-wrap__page" type="button">
            3
          </button>
          <button className="nav-wrap__page" type="button">
            4
          </button>
          <button className="nav-wrap__arrow-next" type="button" />
        </div>
      </div>
    </div>
  );
};
