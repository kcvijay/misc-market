import { Product } from '~/utils/misc/types';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className='max-w-[320px] border border-slate-300 p-4 bg-slate-50/50'>
      <section>
        <img
          src={product.thumbnail}
          alt={product.title}
          className='h-56 w-auto'
        />
      </section>
      <section>
        <h3>{product.title}</h3>
        <p className='line-clamp-2'>{product.description}</p>
        <p>{product.category}</p>
        <p>{product.price}</p>
        <p>{product.brand}</p>
      </section>
    </div>
  );
};

export default ProductCard;
