import React from 'react';
import './pagination.scss';

const Pagination = ({ numPerPage, totalNum, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNum / numPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination'>
      {currentPage !== 1 && (
        <span className='arrow' onClick={() => paginate(currentPage - 1)}>
          {'<'}
        </span>
      )}
      <ul className='paginationList' data-testid="paginationList">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={number === currentPage ? 'pageNum active' : 'pageNum'}
            onClick={() => paginate(number)}
          >
            <span className='pageLink'>{number}</span>
          </li>
        ))}
      </ul>
      {currentPage <= Math.round(totalNum / (numPerPage + 1)) &&
        // temp bug fix ↓
        totalNum >= 12 && (
          <span className='arrow' onClick={() => paginate(currentPage + 1)}>
            {'>'}
          </span>
        )}
    </div>
  );
};

export default React.memo(Pagination);
