import React from 'react';
import {
  FormCss,
  FilterButtonCss,
  FilterInputCss,
  SvgCss,
} from './filter.styled';

export const Filter = ({ filterTerm, setFilter }) => {
  const handleInputFilter = e => {
    setFilter(e.target.value);
  };

  const handleReset = () => {
    setFilter('');
  };

  return (
    <FormCss>
      <FilterButtonCss onClick={handleReset}>
        <XCircle />
      </FilterButtonCss>
      <FilterInputCss
        value={filterTerm}
        onChange={handleInputFilter}
        id="upload-find-document"
        type="text"
        placeholder="Serch file"
      />
    </FormCss>
  );
};

const XCircle = ({ size = 18, color = '#8c9091' }) => (
  <SvgCss
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="butt"
    strokeLinejoin="bevel"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
  </SvgCss>
);

export default XCircle;
