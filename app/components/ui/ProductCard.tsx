import { Product } from '~/utils/misc/types';
import CartIcon from '../icons/CartIcon';
import { Form, Link } from '@remix-run/react';
import AddCartButton from './AddCartButton';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      prefetch='intent'
      className='relative group max-w-[320px] border border-primary/50 bg-primary-light/15 hover:border-primary'
    >
      <p className='absolute top-2 right-2 text-primary'>{product.brand}</p>

      <section className='p-6'>
        <img
          src={product.thumbnail}
          alt={product.title}
          className='h-40 w-full object-contain flex justify-center items-center drop-shadow-2xl'
        />
      </section>
      <section className='relative bg-primary/10 group-hover:bg-primary/15'>
        <Form
          method='post'
          className='absolute -top-4 right-6 flex items-center gap-3'
        >
          <input type='hidden' name='productId' value={product.id} />
          <AddCartButton />
        </Form>
        <div className='p-6'>
          <p className='font-serif text-2xl text-primary font-bold mb-3'>
            {product.price}
          </p>
          <h3 className='font-serif text-lg text-primary mb-3 line-clamp-1'>
            {product.title}
          </h3>

          <p className='relative line-clamp-2 text-slate-600'>
            {product.description}
          </p>
        </div>
      </section>
    </Link>
  );
};

export default ProductCard;
