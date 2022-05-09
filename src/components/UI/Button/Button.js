import React from 'react';
import './Button.scss';

const Button = ({ text, iconSrc, type, click, disabled }) => {
  return (
    <button
      onClick={click}
      disabled={disabled}
      className={`btn-container ${iconSrc && 'with-icon'} ${type && type}`}
      data-testid="button"
    >
      <span>{!disabled ? text : 'Bu ürünü sepete eklemeyemezsiniz'}</span>
      {iconSrc && <img src={iconSrc} alt='arrow-down' />}
    </button>
  );
};

export default Button;
