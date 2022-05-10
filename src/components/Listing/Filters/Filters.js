import React, { useMemo } from 'react';

import { useProducts } from '../../../contexts/ProductContext';

import Filter from './Filter/Filter';
import Sorting from './Sorting/Sorting';

import './Filters.scss';

const Filters = () => {
  const { products } = useProducts();

  let colorsSet = {};
  let brandsSet = {};

  // This will return an object like {Yellow:2,Red:4,Black:5}
  colorsSet = useMemo(() => {
    products.forEach((product) => {
      if (colorsSet[product.color]) {
        colorsSet = {
          ...colorsSet,
          [product.color]: colorsSet[product.color] + 1,
        };
      } else {
        colorsSet = { ...colorsSet, [product.color]: 1 };
      }
    });
    return colorsSet;
  }, [products]);

  // This will return an object like {Apple:2,Samsung:4,Huawei:5}
  brandsSet = useMemo(() => {
    products.forEach((product) => {
      if (brandsSet[product.brand]) {
        brandsSet = {
          ...brandsSet,
          [product.brand]: brandsSet[product.brand] + 1,
        };
      } else {
        brandsSet = { ...brandsSet, [product.brand]: 1 };
      }
    });
    return brandsSet;
  }, [products]);

  return (
    <div className='filters'>
      <div className='sticky'>
        <Filter data={colorsSet} filterName='color' />
        <Sorting />
        <Filter data={brandsSet} filterName='brand' />
      </div>
    </div>
  );
};

export default React.memo(Filters);
