import React, { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage if available
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);

  // Use useEffect to update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    console.log("Current cart:", cart);
  }, [cart]);

  const addToCart = (product, quantity) => {
    console.log(`Adding product with id ${product.id} and quantity ${quantity}`);
    
    // Ensure quantity is a number
    const numQuantity = Number(quantity);
  
    const existingItem = cart.find(item => item.id === product.id);
  
    if (existingItem) {
      console.log(`Item already exists in cart. Existing quantity: ${existingItem.quantity}, New quantity: ${existingItem.quantity + quantity}`);
    
      
      // Ensure existingItem.quantity is a number
      const existingQuantity = Number(existingItem.quantity);
      
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: existingQuantity + numQuantity }
          : item
      ));
    } else {
      console.log("Item is new to the cart. Adding product with id ${product.id} and quantity ${quantity}`");
      setCart([...cart, { ...product, quantity: numQuantity }]);
    }
  };
  

  const removeFromCart = (itemId) => {
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
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, adjustQuantity }}>
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
