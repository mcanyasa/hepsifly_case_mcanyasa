import { useFilters } from '../../../contexts/FiltersContext';
import { sortingOptions } from '../Filters/Sorting/Sorting';

import Button from '../../UI/Button/Button';
import Done from '../../../assets/icons/Done.svg';
import ArrowDown from '../../../assets/icons/ArrowDown.svg';

import './Bar.scss';

const Bar = () => {
  const { filters, setFilters } = useFilters();

  const changeSortingHandler = (sort) => {
    if (filters.sort === sort) {
      setFilters((prev) => ({ ...prev, sort: '' }));
    } else {
      setFilters((prev) => ({ ...prev, sort }));
    }
  };

  return (
    <div className='bar'>
      <div className='searched-item-container'>
        <p className='title'>Cep telefonu</p>
        {filters.search.length >= 2 && (
          <p className='searched-word'>
            Aranan Kelime:{' '}
            <span data-testid='searched-word'>{decodeURI(filters.search)}</span>
          </p>
        )}
      </div>
      <div className='sorting'>
        <Button text='Sıralama' iconSrc={ArrowDown} />
        <div className='sorting-options' data-testid='sorting-options'>
          {sortingOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => changeSortingHandler(option.name)}
              data-testid='single-option'
            >
              <img
                src={Done}
                className={option.name === filters.sort ? 'selected' : ''}
                alt='asdsd'
                width={20}
              />
              <span
                data-testid={
                  option.name === filters.sort ? 'selected-sorting-option' : ''
                }
              >
                {option.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bar;
