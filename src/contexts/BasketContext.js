import { createContext, useContext, useEffect, useState } from 'react';

const BasketContext = createContext();

export default BasketContext;

export const BasketContextProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [prodId, setProdId] = useState(); // product to be deleted

  useEffect(() => {
    const storedBasketItems = JSON.parse(localStorage.getItem('basketItems'));
    storedBasketItems ? setBasketItems(storedBasketItems) : [];
  }, []);

  useEffect(() => {
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
  }, [basketItems]);

  const addToBasket = (product) => {
    // double checking if the product is in the basket
    if (!basketItems.find((item) => item.id === product.id)) {
      setBasketItems((prev) => [...prev, product]);
    }
  };

  const removeFromBasket = (prodId) => {
    setProdId(prodId);
    setModalOpen(true);
  };

  const confirmRemoving = (isConfirmed) => {
    if (isConfirmed) {
      const updatedBasketItems = basketItems.filter((item) => item.id !== prodId);
      setBasketItems(updatedBasketItems);
    }
    setModalOpen(false);
  };

  const values = {
    basketItems,
    setBasketItems,
    addToBasket,
    removeFromBasket,
    modalOpen,
    setModalOpen,
    confirmRemoving,
  };

  return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>;
};

export const useBasket = () => { return useContext(BasketContext)} ;
