import { useEffect, useState } from 'react';
import ChevronRight from '~/components/icons/ChevronRight';
import CartItem from '~/components/ui/CartItem';
import {
  addToCart,
  CartProduct,
  clearCart,
  removeOneFromCart,
  totalCartAmount,
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
        <h2 className='font-serif text-lg text-center text-primary mb-3'>
          My Cart
        </h2>
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
            <div className='flex justify-between items-start'>
              <button
                onClick={handleClearCart}
                className='text-primary p-3 rounded-full'
              >
                Clear Cart
              </button>
              <div className='flex flex-col text-lg text-primary gap-3 font-bold p-4'>
                <div className='text-right'>
                  <p>Total {totalCartAmount()}</p>
                </div>
                <button className='flex items-center gap-1 bg-primary text-white py-2 pr-3 pl-4 rounded-full'>
                  <span>Checkout</span>
                  <ChevronRight className='size-4' />
                </button>
              </div>
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
