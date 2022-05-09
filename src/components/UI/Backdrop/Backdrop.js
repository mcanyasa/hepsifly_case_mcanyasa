import React from 'react';
import './Backdrop.scss';

const Backdrop = ({ visible, toggle }) => {
  return (
    <>
      {visible && (
        <div data-testid='backdrop' onClick={() => toggle(false)} className='backdrop'></div>
      )}
    </>
  );
};

export default Backdrop;
