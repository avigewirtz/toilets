import React, { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);
  const [lastAddedItem, setLastAddedItem] = useState(null);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
   // console.log("Current cart:", cart);
  }, [cart]);

  const addToCart = (product, quantity, rentalDateRange, deliveryAddress, numberOfDays) => {

    const numQuantity = Number(quantity);
    const existingItem = cart.find(item => item.id === product.id);

    const newItem = {
      ...product,
      quantity: numQuantity,
      rentalDateRange: rentalDateRange,
      deliveryAddress: deliveryAddress,
      numberOfDays: numberOfDays
    };
    

    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? newItem
          : item
      ));
    } else {
      setCart([...cart, newItem]);
    }
    setLastAddedItem(newItem);
  };

  const removeFromCart = (itemId) => {
    console.log('Removing item with ID:', itemId);
    setCart(cart.filter(item => item.id !== itemId));
  };

  const adjustQuantity = (itemId, newQuantity) => {
    setCart(cart.map(item =>
      item.id === itemId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, adjustQuantity, lastAddedItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
