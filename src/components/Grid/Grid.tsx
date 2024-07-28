import { useEffect, useState } from 'react';
import { SelectComponent } from '../../shared/ui/Select/Select';
import './Grid.scss';
import { Device } from '../../types/Device';
import { getPhones } from '../../utils/api';
import { ProductCard } from '../ProductCard/ProductCard';

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
  const [allPhones, setAllPhones] = useState<Device[]>([]);
  const [displayedPhones, setDisplayedPhones] = useState<Device[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const fetchPhones = async () => {
    try {
      const phonesData = await getPhones();
      setAllPhones(phonesData);
      setDisplayedPhones(phonesData.slice(0, itemsPerPage));
    } catch (error) {
      throw new Error(`Error has occurred: ${error}`);
    }
  };

  useEffect(() => {
    fetchPhones();
  });

  useEffect(() => {
    setDisplayedPhones(allPhones.slice(0, itemsPerPage));
  }, [itemsPerPage, allPhones]);

  const handleItemsPerPageChange = (selectedOption: { value: string }) => {
    setItemsPerPage(parseInt(selectedOption.value, 10));
  };

  const handleSortByVersion = (selectedOption: { value: string }) => {
    const select = selectedOption.value;
    // eslint-disable-next-line no-console
    console.log(select);
  };

  return (
    <div className="component" id="top">
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
          <p>
            {allPhones.length}
            models
          </p>
        </div>
        <div className="component__list-params list-params">
          <span className="list-params__sort-by">
            <p className="list-params__sort-title">Sort by</p>
            <SelectComponent
              option={SortOptions}
              handleChange={handleSortByVersion}
            />
          </span>
          <span className="list-params__items-on-page">
            <p className="list-params__sort-title">Items on page</p>
            <SelectComponent
              option={onPageCountOptions}
              handleChange={handleItemsPerPageChange}
            />
          </span>
        </div>
        <div className="component__wrap">
          <div className="component__list list">
            {displayedPhones.map((phone) => (
              <ProductCard phone={phone} />
            ))}
          </div>
        </div>
        <div className="component__nav-wrap nav-wrap">
          <button
            className="nav-wrap__arrow-back"
            type="button"
            aria-label="back"
          />
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
          <button
            className="nav-wrap__arrow-next"
            type="button"
            aria-label="next"
          />
        </div>
      </div>
    </div>
  );
};
