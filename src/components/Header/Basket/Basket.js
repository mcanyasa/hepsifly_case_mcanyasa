import React from 'react';
import { useBasket } from '../../../contexts/BasketContext';
import Button from '../../UI/Button/Button';
import './Basket.scss';

const Basket = () => {
  const { basketItems, removeFromBasket } = useBasket();

  if (!basketItems.length) {
    return (
      <div className='basket-items-container' data-testid='empty-basket'>
        Henüz sepetiniz boş...
      </div>
    );
  }
  return (
    <div className='basket-items-container' data-testid='basket-items-container'>
      {basketItems.map((item) => (
        <div
          key={item.id}
          className='single-basket-item'
          data-testid='single-basket-item'
        >
          <div className='image-container'>
            <img src={item.images[0].original} alt={item.name} />
          </div>
          <div className='basket-item-details'>
            <p className='name'>{item.name}</p>
            <Button
              text='Kaldır'
              type='danger'
              click={() => removeFromBasket(item.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Basket);
