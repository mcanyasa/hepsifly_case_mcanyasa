import { useState } from 'react';

import { useProducts } from '../../../contexts/ProductContext';
import { useFilters } from '../../../contexts/FiltersContext';

import SingleProduct from '../SingleProduct/SingleProduct';
import Pagination from '../../Pagination/Pagination';
import Loading from '../../UI/SkeletonLoading/Loading';

import './Products.scss';

const Products = ({ scrollToProductsRef }) => {
  const [numPerPage] = useState(12);
  const { products, loading, error } = useProducts();

  const { filters, setFilters } = useFilters();

  const indexOfLastResult = filters.curPage * numPerPage;
  const indexOfFirstResult = indexOfLastResult - numPerPage;
  const currentResults = products.slice(indexOfFirstResult, indexOfLastResult);

  const totalNum = products.length;

  const paginate = (pageNumber) => {
    setFilters((prev) => ({ ...prev, curPage: pageNumber }));
    scrollToProductsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  if (error) {
    return (
      <div className='products-main'>
        <h3 data-testid='fetch-products-error'>
          Geçici olarak ürünleri listeleyemiyoruz.Lütfen daha sonra tekrar
          deneyin...
        </h3>
      </div>
    );
  }

  if (!loading && !products.length) {
    return (
      <div className='products-main' data-testid='empty-result'>
        <h3>Aradığınız kriterlere uygun bir ürün bulamadık...</h3>
      </div>
    );
  }
  return (
    <div className='products-main'>
      <div className='products-container' data-testid='listing-products'>
        {loading && [...Array(12)].map((_, index) => <Loading key={index} />)}
        {currentResults.map((prod) => (
          <SingleProduct key={prod.id} product={prod} id='singleprod' />
        ))}
      </div>
       <Pagination
        numPerPage={numPerPage}
        totalNum={totalNum}
        paginate={paginate}
        currentPage={filters.curPage}
      /> 
    </div>
  );
};

export default Products;
