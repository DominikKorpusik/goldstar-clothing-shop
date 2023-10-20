import { createContext, useState, useEffect } from "react";

export const updateCartItem = (cartItems, productToAdd, state = true) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    switch (state) {
      case true:
        return cartItems.map((cartItem) =>
          cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      case false:
        return cartItems.map((cartItem) =>
          cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      default:
        break;
    }
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  updateItemInCart: () => {},
  cartItemCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    setCartItemCount(count);
  }, [cartItems]);

  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    setCartTotal(totalPrice);
  }, [cartItems]);

  const updateItemInCart = (product, state) =>
    setCartItems(updateCartItem(cartItems, product, state));

  const removeItemFromCart = (product) => {
    setCartItems(removeItem(cartItems, product));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    updateItemInCart,
    cartItemCount,
    removeItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
