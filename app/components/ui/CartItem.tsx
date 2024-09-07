import { Link } from '@remix-run/react';
import {
  addToCart,
  CartProduct,
  removeOneFromCart,
} from '~/utils/methods/cart';

const CartItem = ({
  product,
  addToCart,
  removeFromCart,
}: {
  product: CartProduct;
  addToCart: () => void;
  removeFromCart: () => void;
}) => {
  return (
    <div className='flex justify-between items-start flex-wrap py-4 border-b border-b-primary/50'>
      <section className='flex gap-6'>
        <figure className='relative size-16 bg-primary-light'>
          <img
            src={product.thumbnail}
            alt={product.title}
            className='w-full h-full object-contain'
          />
        </figure>
        <div className='w-[300px]'>
          <Link
            to={`/products/${product.id}`}
            className='font-serif text-lg text-primary line-clamp-1 hover:underline'
          >
            {product.title}
          </Link>
          <p className='text-slate-600'>{product.brand}</p>
        </div>
      </section>

      <section className='flex self-center'>
        <button
          className='w-12 h-[1.75rem] text-lg flex justify-center items-center bg-primary text-white rounded-tl-full rounded-bl-full border-r'
          onClick={removeFromCart}
        >
          -
        </button>
        <button
          className='w-12 h-[1.75rem] text-lg flex justify-center items-center bg-primary text-white rounded-tr-full rounded-br-full'
          onClick={addToCart}
        >
          +
        </button>
      </section>
      <section className='self-center w-16 text-right'>
        <p className='text-slate-600 text-sm'>
          <span>
            {product.price} &times; {product.cartQuantity}
          </span>
        </p>
        <p className='text-lg font-serif text-primary'>
          {(product.price * product.cartQuantity).toFixed(2)}
        </p>
      </section>
    </div>
  );
};

export default CartItem;
