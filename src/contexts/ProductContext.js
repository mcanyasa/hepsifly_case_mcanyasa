import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useFilters } from './FiltersContext';

const ProductContext = createContext();

export default ProductContext;

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { filters } = useFilters();

  let baseURL = `https://quiet-thicket-51521.herokuapp.com/products?`;

  const color = filters.color.length > 0 ? `color=${filters.color}` : '';
  const brand = filters.brand.length > 0 ? `brand=${filters.brand}` : '';
  const sort = filters.sort.length > 0 ? `sort=${filters.sort}` : '';
  const search = filters.search.length >= 2 ? `name=${filters.search}` : '';

  baseURL = baseURL + brand + '&' + color + '&' + sort + '&' + search;

  const fetchData = useCallback(
    async (baseURL) => {
      setLoading(true);
      try {
        const res = await fetch(baseURL);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    },
    [baseURL]
  );

  useEffect(() => {
    fetchData(baseURL);
  }, [baseURL]);

  const values = {
    products,
    setProducts,
    loading,
    error,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
