import React, { useMemo } from 'react';
import { useFilters } from '../../../../contexts/FiltersContext';
import './Filter.scss';

const Filter = ({ data, filterName }) => {
  const { filters, setFilters } = useFilters();

  const filterData = useMemo(() => {
    return Object.keys(data).map((key) => ({
      name: key,
      quantity: data[key],
    }));
  }, [data]);

  const changeFilter = (filterName, key) => {
    if (filters[filterName] === key) {
      setFilters((prev) => ({ ...prev, [filterName]: '', curPage: 1 }));
    } else {
      setFilters((prev) => ({ ...prev, [filterName]: key, curPage: 1 }));
    }
  };

  return (
    <div className='filter'>
      <h3>{filterName === 'color' ? 'Colors' : 'Brands'}</h3>
      <ul>
        {filterData &&
          filterData.map((item, index) => (
            <li
              key={index}
              onClick={() => changeFilter(filterName, item.name)}
              className={filters[filterName] === item.name ? 'selected' : ''}
              data-testid={
                filters[filterName] === item.name ? 'selected-filter' : 'filter'
              }
            >
              <span>{item.name}</span> <span>({item.quantity})</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default React.memo(Filter);
