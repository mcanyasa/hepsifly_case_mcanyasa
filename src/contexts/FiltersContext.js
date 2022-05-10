import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../helpers/useQuery';

const FiltersContext = createContext();

export default FiltersContext;

export const FiltersContextProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    curPage: 1,
    color: '',
    brand: '',
    sort: '', // desc asc,newest,oldest,
    search: '',
  });

  const navigate = useNavigate();
  let query = useQuery();

  useEffect(() => {
    // for the page refreshes
    for (let key in filters) {
      if (key === 'curPage' && query.get('page')) {
        // page query is an exception since the query is defined as page and the filter is curPage
        setFilters((prev) => ({ ...prev, curPage: +query.get('page') }));
      }
      if (query.get(key)) {
        setFilters((prev) => ({ ...prev, [key]: query.get(key) }));
      }
    }
  }, []);

  useEffect(() => {
    let queryString = '/?';
    for (let key in filters) {
      if (key === 'curPage') {
        queryString += `page=${filters.curPage}`;
      } else {
        queryString += `&${key}=${filters[key]}`;
      }
    }
    navigate(queryString);
  }, [filters]);

  const values = {
    filters,
    setFilters,
  };

  return (
    <FiltersContext.Provider value={values}>{children}</FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);
