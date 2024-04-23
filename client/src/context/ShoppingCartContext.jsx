import React, { createContext, useState, useContext } from 'react';

// Create context object
const ShoppingCartContext = createContext({});

// Custom hook to consume context
export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  return context;
};

// Provider component
export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addItemToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const contextValue = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
