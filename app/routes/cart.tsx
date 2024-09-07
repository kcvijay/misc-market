import { useEffect, useState } from 'react';
import CartItem from '~/components/ui/CartItem';
import {
  addToCart,
  CartProduct,
  clearCart,
  removeOneFromCart,
} from '~/utils/methods/cart';

const Cart = () => {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem('misc_market_cart') || '[]');
    setCart(cart);
  };

  useEffect(() => {
    loadCart();
  }, []);

  const handleAddToCart = (product: CartProduct) => {
    addToCart(product);
    loadCart();
  };

  const handleRemoveOneFromCart = (product: CartProduct) => {
    removeOneFromCart(product);
    loadCart();
  };

  const handleClearCart = () => {
    clearCart();
    loadCart();
  };
  return (
    <div>
      <header>
        <h2 className='font-serif text-lg text-primary mb-3'>My Cart</h2>
        <hr className='border-primary/50' />
      </header>
      <div>
        {cart.length > 0 ? (
          <div>
            {cart.map((product: CartProduct) => (
              <CartItem
                key={product.id}
                product={product}
                addToCart={() => handleAddToCart(product)}
                removeFromCart={() => handleRemoveOneFromCart(product)}
              />
            ))}
            <div className=''>
              <button
                onClick={handleClearCart}
                className='text-primary p-3 rounded-full mt-6'
              >
                Clear Cart
              </button>
            </div>
          </div>
        ) : (
          <p className='text-center text-slate-600 mt-12'>The cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
