import { useFilters } from '../../../../contexts/FiltersContext';
import '../Filter/Filter.scss';

export const sortingOptions = [
  { name: 'asc', text: 'En Düşük Fiyat' },
  { name: 'desc', text: 'En Yüksek Fiyat' },
  { name: 'newest', text: 'En Yeniler A>Z' },
  { name: 'oldest', text: 'En Yeniler Z>A' },
];

const Sorting = () => {
  const { filters, setFilters } = useFilters();

  const changeSorting = (sort) => {
    if (filters.sort === sort) setFilters((prev) => ({ ...prev, sort: '' }));
    else setFilters((prev) => ({ ...prev, sort }));
  };

  return (
    <div className='filter'>
      <h3>Sorting</h3>
      <ul>
        {sortingOptions.map((option) => (
          <li
            onClick={() => changeSorting(option.name)}
            key={option.name}
            className={filters.sort === option.name ? 'selected' : ''}
            data-testid={
              filters.sort === option.name
                ? 'selected-sortOption'
                : 'sortOption'
            }
          >
            {option.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sorting;
