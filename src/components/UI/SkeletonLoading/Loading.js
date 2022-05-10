import React from 'react';
import './Loading.scss';

const Loading = () => {
  return (
    <>
      <div className='site-container' >
        <div className='container'>
          <section className='card'>
            <figure className='card-image loading'></figure>
            <div className='card-detail'>
              <h3 data-testid='skeleton-loading' className='card-title loading'></h3>
              <p className='card-description loading'></p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Loading;
