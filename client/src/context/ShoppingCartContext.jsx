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
  
  const [isOpen, setIsOpen] = useState(false)
  
  const [cartItems, setCartItems] = useState([]);


  const itemQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity, 0
  )

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    //function to get item quantity
    const getItemQuantity = ()=>{
     cartItems.find(item => item.id === id)?.quantity || 0
    }

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
    openCart, 
    closeCart,
    getItemQuantity,
    addItemToCart,
    removeItemFromCart,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
