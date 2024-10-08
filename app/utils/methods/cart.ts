import { showNotification } from '../misc/notification';
import { Product } from '../misc/types';

export interface CartProduct extends Product {
  cartQuantity: number;
}

export const addToCart = async (product: CartProduct) => {
  const existingCart = JSON.parse(
    localStorage.getItem('misc_market_cart') || '[]'
  );

  const productInCart = existingCart.find(
    (item: { id: number }) => item.id === product.id
  );

  const isInStock = product.stock > 0;
  const isEnoughStock = productInCart
    ? productInCart.stock > productInCart.cartQuantity
    : true;

  if (productInCart && isInStock) {
    if (isEnoughStock) {
      productInCart.cartQuantity += 1;
      showNotification('success', 'Item added to cart');
    } else {
      showNotification('error', 'Product is out of stock');
      return;
    }
  } else if (isInStock) {
    existingCart.push({ ...product, cartQuantity: 1 });
    showNotification('success', 'Item added to cart');
  } else {
    showNotification('error', 'Product is out of stock');
    return;
  }
  localStorage.setItem('misc_market_cart', JSON.stringify(existingCart));
  window.dispatchEvent(new CustomEvent('cart_changed'));
};

export const removeOneFromCart = async (product: CartProduct) => {
  const existingCart = JSON.parse(
    localStorage.getItem('misc_market_cart') || '[]'
  );

  const productInCart = existingCart.find(
    (item: { id: number }) => item.id === product.id
  );

  if (productInCart) {
    if (productInCart.cartQuantity > 1) {
      productInCart.cartQuantity -= 1;
    } else {
      const updatedCart = existingCart.filter(
        (item: { id: number }) => item.id !== product.id
      );
      localStorage.setItem('misc_market_cart', JSON.stringify(updatedCart));
      window.dispatchEvent(new CustomEvent('cart_changed'));
      if (confirm('The cart item will be removed.') == true) {
        return;
      }
    }
  }
  localStorage.setItem('misc_market_cart', JSON.stringify(existingCart));
  window.dispatchEvent(new CustomEvent('cart_changed'));
};

export const clearCart = async () => {
  if (confirm('This will remove all cart items.') == true) {
    localStorage.removeItem('misc_market_cart');
    window.dispatchEvent(new CustomEvent('cart_changed'));
  }
};

export const totalCartAmount = () => {
  const cart = JSON.parse(localStorage.getItem('misc_market_cart') || '[]');
  return cart
    .reduce(
      (acc: number, item: CartProduct) => acc + item.price * item.cartQuantity,
      0
    )
    .toFixed(2);
};
