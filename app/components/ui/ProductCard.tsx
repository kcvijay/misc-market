import { Product } from '~/utils/misc/types';
import CartIcon from '../icons/CartIcon';
import { Form, Link } from '@remix-run/react';
import AddCartButton from './AddCartBtnSmall';
import { addToCart, CartProduct } from '~/utils/methods/cart';
import AddCartBtnSmall from './AddCartBtnSmall';

const ProductCard = ({
  product,
  length,
}: {
  product: Product | CartProduct;
  length: number;
}) => {
  const handleAddToCart = (
    // Prevents redirectio to product page on cart button click.
    e: React.MouseEvent<HTMLButtonElement>,
    product: CartProduct
  ) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      prefetch='intent'
      className={`${
        length <= 3 ? 'w-[320px]' : ''
      } relative group border border-primary/50 bg-primary-light/15 hover:border-primary`}
    >
      <p className='absolute top-2 right-2 text-primary'>{product.brand}</p>

      <section className='p-6'>
        <img
          src={product.thumbnail}
          alt={product.title}
          className='h-40 w-full object-contain flex justify-center items-center drop-shadow-2xl'
        />
      </section>
      <section className='relative bg-primary/10 group-hover:bg-primary/15 p-6'>
        <div className='flex justify-between items-center mb-3'>
          <p className='font-serif text-2xl text-primary'>{product.price}</p>
          <AddCartBtnSmall
            onClick={(e) => handleAddToCart(e, product as CartProduct)}
          />
        </div>

        <div>
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
