import React from 'react';
import Select, { StylesConfig } from 'react-select';

interface Props {
  option: object[];
}

const customStyles: StylesConfig = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#FAFBFC' : '#fff',
    boxShadow: 'none',
    borderColor: '#B4BDC3',
    fontFamily: 'Mont, sans-serif',
    fontSize: '14px',
    outline: 'none',
    width: '136px',
    hight: '40px',
    '&:hover': {
      borderColor: '#89939A',
    },
    '&:focus': {
      borderColor: '#313237',
      backgroundColor: '#313237',
    },
  }),
  option: (provided) => ({
    ...provided,
    backgroundColor: '#fff',
    color: '#89939A',
    fontFamily: 'Mont, sans-serif',
    fontSize: '14px',
    fontWeight: '500',
    '&:hover': {
      backgroundColor: '#f8f9fa',
      color: '#313237',
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
};

export const SelectComponent: React.FC<Props> = ({ option }) => (
  <Select
    styles={customStyles}
    options={option}
    defaultValue={option[0]}
    isSearchable={false}
  />
);
