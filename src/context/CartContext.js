import React, { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage if available
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);
  const [lastAddedItem, setLastAddedItem] = useState(null);

  // Use useEffect to update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
   // console.log("Current cart:", cart);
  }, [cart]);

  const addToCart = (product, quantity) => {
  
    // Ensure quantity is a number
    const numQuantity = Number(quantity);
  
    const existingItem = cart.find(item => item.id === product.id);
  
    if (existingItem) {
      // Replace the existing quantity with the new quantity
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: numQuantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: numQuantity }]);
    }
    setLastAddedItem({ ...product, quantity });
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
