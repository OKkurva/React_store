// src/context/CartContext.js
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

// Провайдер — обгортка для всієї апки
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Перевіряємо, чи товар уже в кошику
    const existing = cart.find((item) => item.id === product.id);
    if (!existing) {
      setCart([...cart, product]);
    } else {
      alert("Цей товар уже у кошику!");
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Кастомний хук для зручності
export function useCart() {
  return useContext(CartContext);
}
