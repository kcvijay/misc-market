import { Product } from '~/utils/misc/types';
import CartIcon from '../icons/CartIcon';
import { Form } from '@remix-run/react';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className='relative max-w-[320px] border border-primary/50 bg-primary-light/15'>
      <p className='absolute top-2 right-2 text-primary'>{product.brand}</p>
      <section className='p-6'>
        <img
          src={product.thumbnail}
          alt={product.title}
          className='h-40 w-full object-contain flex justify-center items-center drop-shadow-2xl'
        />
      </section>
      <section className='bg-primary/10'>
        <div className='p-6'>
          <div className='flex items-end justify-between mb-6'>
            <p className='font-serif flex justify-end text-2xl text-primary font-bold'>
              {product.price}
            </p>
            <Form method='post' className='flex items-center gap-3'>
              <input type='hidden' name='productId' value={product.id} />
              <button
                type='submit'
                className='bg-primary flex justify-center items-center p-1 text-white size-[2rem] rounded-xl outline outline-2 outline-primary outline-offset-1'
              >
                <CartIcon className='size-5' />
              </button>
            </Form>
          </div>
          <h3 className='font-serif text-lg text-primary mb-3 line-clamp-1'>
            {product.title}
          </h3>
          <p className='line-clamp-2 text-slate-600'>{product.description}</p>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
