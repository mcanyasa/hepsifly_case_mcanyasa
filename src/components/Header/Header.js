import { useEffect, useState } from 'react';

import Logo from '../../assets/logo/Logo.svg';
import Search from '../../assets/icons/Search.svg';
import Button from '../UI/Button/Button';
import Basket from './Basket/Basket';

import { useBasket } from '../../contexts/BasketContext';
import { useFilters } from '../../contexts/FiltersContext';

import { useQuery } from '../../helpers/useQuery';
import './Header.scss';

const Header = () => {
    const [searchText, setSearchText] = useState('');

    const { basketItems } = useBasket();
    const { setFilters } = useFilters();
  
    let query = useQuery();
  
    useEffect(() => {
      if (query.get('name')) {
        setSearchText(query.get('name'));
      }
    }, []);
  
    const encodedSearchText = encodeURI(searchText);
  
    useEffect(() => {
      const searchTime = setTimeout(() => {
        if (searchText.length >= 2) {
          setFilters({
            curPage: 1,
            color: '',
            brand: '',
            sort: '',
            search: encodedSearchText,
          });
        } else if (searchText.length === 0) {
          setFilters((prev) => ({ ...prev, search: '' }));
        }
      }, [500]);
  
      return () => {
        clearTimeout(searchTime);
      };
    }, [searchText]);
  
    const emptyAllFilters = () => {
      setFilters({
        curPage: 1,
        color: '',
        brand: '',
        sort: '',
        search: '',
      });
      setSearchText('');
    };
    return (
      <header>
        <div className='logo-container' onClick={emptyAllFilters}>
          <img className='logo' src={Logo} alt='logo' />
        </div>
        <div className='search-bar'>
          <img src={Search} alt='search-icon' width={17.5} />
          <input
            type='text'
            placeholder="25 milyon'dan fazla ürün içerisinde ara"
            data-testid='search-input'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className='basket-container' data-testid='basket'>
        <Button text='Sepetim' />
        <span className='quantity'>{basketItems? basketItems.length : 0}</span>
        <div className='white-line'></div>
        <div className='basket' data-testid='basket'>
          <Basket />
        </div>
      </div>
      </header>
    );
  };
  
  export default Header;