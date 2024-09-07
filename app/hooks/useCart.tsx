import { useEffect, useState } from 'react';

const useCart = () => {
  const [cartItems, setCartItems] = useState<number>(0);

  const getCartItems = () => {
    const cart = JSON.parse(localStorage.getItem('misc_market_cart') || '[]');
    const totalCartQuantity = cart
      .map((item: { cartQuantity: number }) => item.cartQuantity)
      .reduce((a: number, b: number) => a + b, 0);
    setCartItems(totalCartQuantity);
  };

  useEffect(() => {
    getCartItems();

    const handleStorageChange = () => {
      getCartItems();
    };

    window.addEventListener('cart_changed', handleStorageChange);

    return () => {
      window.removeEventListener('cart_changed', handleStorageChange);
    };
  }, []);

  return { cartItems, refreshCart: getCartItems };
};

export default useCart;
