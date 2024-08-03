import classNames from 'classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SelectComponent } from '../../shared/ui/Select/Select';
import './Grid.scss';
import { getProducts } from '../../utils/api';
import { ProductCard } from '../ProductCard/ProductCard';
import { Product } from '../../types/Product';

const SortOptions = [
  { value: 'default', label: 'Select...' },
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
];

const onPageCountOptions = [
  { value: 'default', label: 'Select...' },
  { value: '10', label: '10' },
  { value: '20', label: '20' },
  { value: '30', label: '30' },
];

const PAGES_DEFAULT = [1, 2, 3, 4];

type Props = {
  category: string;
  titlePage: string;
  namePage: string;
};

export const Grid: React.FC<Props> = ({ category, titlePage, namePage }) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(40);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginationButtons, setPaginationButtons] = useState<number[]>(PAGES_DEFAULT);

  const topRef = useRef<HTMLDivElement>(null);

  const updateDisplayedItems = useCallback(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedProducts(allProducts.slice(startIndex, endIndex));
  }, [itemsPerPage, currentPage, allProducts]);

  const updatePaginationButtons = (
    totalPages: number[],
    pageNow: number,
  ): number[] => {
    if (totalPages.length <= 4) {
      return totalPages;
    }

    const startPage = Math.max(pageNow - 1, 1);
    const endPage = Math.min(startPage + 3, totalPages.length);

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );
  };

  const getTotalPages = (
    devices: Product[],
    devicesPerPage: number,
  ): number[] => {
    const pageCount = Math.ceil(devices.length / devicesPerPage);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  };

  useEffect(() => {
    const loadDevices = async () => {
      try {
        const data = await getProducts();
        const onlyOfCategory = data.filter(
          (item) => item.category === category,
        );
        setAllProducts(onlyOfCategory);
      } catch (error) {
        throw new Error(`Error has occurred: ${error}`);
      }
    };

    loadDevices();
  }, [category]);

  useEffect(() => {
    const totalPages = getTotalPages(allProducts, itemsPerPage);
    setPaginationButtons(updatePaginationButtons(totalPages, currentPage));
    updateDisplayedItems();
  }, [allProducts, itemsPerPage, currentPage, updateDisplayedItems]);

  const handleItemsPerPageFilter = (selectedOption: { value: string }) => {
    const newItemsPerPage = parseInt(selectedOption.value, 10);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const handleSortByYear = (selectedOption: { value: string }) => {
    const select = selectedOption.value;
    const sortedPhones = [...allProducts];

    if (select === 'newest') {
      sortedPhones.sort((a, b) => b.year - a.year);
    } else if (select === 'oldest') {
      sortedPhones.sort((a, b) => a.year - b.year);
    }

    setAllProducts(sortedPhones);
    setCurrentPage(1);
  };

  const handlePaginationClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);

    if (topRef.current) {
      try {
        topRef.current.scrollIntoView({ behavior: 'smooth' });
      } catch (e) {
        topRef.current.scrollIntoView({ behavior: 'auto' });
      }
    }

    const totalPages = getTotalPages(allProducts, itemsPerPage);
    setPaginationButtons(updatePaginationButtons(totalPages, pageNumber));
  };

  return (
    <div className="component" id="top" ref={topRef}>
      <div className="component__container">
        <div className="component__path path">
          <a className="path__home-image" href="home">
            <img src="/Icons/Home.svg" alt="Home icon" />
          </a>
          <div className="path__arrow">
            <img src="/Icons/Chevron (Arrow Right).svg" alt="Arrow right" />
          </div>
          <div className="path__page">{namePage}</div>
        </div>
        <div className="component__header">
          <h1 className="component__title">{titlePage}</h1>
        </div>
        <div className="component__models-number">
          <p>{`${allProducts.length} models`}</p>
        </div>
        <div className="component__list-params list-params">
          <span className="list-params__sort-by">
            <p className="list-params__sort-title">Sort by</p>
            <SelectComponent
              option={SortOptions}
              handleChange={handleSortByYear}
            />
          </span>
          <span className="list-params__items-on-page">
            <p className="list-params__sort-title">Items on page</p>
            <SelectComponent
              option={onPageCountOptions}
              handleChange={handleItemsPerPageFilter}
            />
          </span>
        </div>
        <div className="component__wrap">
          <div className="component__list list">
            {displayedProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
        <div className="component__nav-wrap nav-wrap">
          <button
            className="nav-wrap__arrow-back"
            type="button"
            aria-label="back"
            disabled={currentPage === 1}
            onClick={() => handlePaginationClick(currentPage - 1)}
          />
          {paginationButtons.map((page) => (
            <button
              className={classNames('nav-wrap__page', {
                active: page === currentPage,
              })}
              type="button"
              key={page}
              onClick={() => handlePaginationClick(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="nav-wrap__arrow-next"
            type="button"
            aria-label="next"
            disabled={
              currentPage === getTotalPages(allProducts, itemsPerPage).length
            }
            onClick={() => handlePaginationClick(currentPage + 1)}
          />
        </div>
      </div>
    </div>
  );
};
