import { Form, json, useLoaderData } from '@remix-run/react';
import CartIcon from '~/components/icons/CartIcon';
import Reviews from '~/components/ui/Reviews';
import { getProductById } from '~/utils/methods/actions';
import { addToCart, CartProduct } from '~/utils/methods/cart';
import { roundFigure } from '~/utils/misc/prices';

export const loader = async ({ params }: { params: any }) => {
  const { id } = params;
  const product = await getProductById(id);
  return json(product, {
    headers: {
      'Cache-Control': 'public, max-age=60',
    },
  });
};

const ProductId = () => {
  const product = useLoaderData<typeof loader>();
  const {
    title,
    brand,
    thumbnail,
    price,
    discountPercentage,
    description,
    warrantyInformation,
    shippingInformation,
    dimensions,
    availabilityStatus,
    stock,
    reviews,
  } = product;
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-[66.66%_33.33%] gap-6'>
        <div className='pr-6'>
          <figure className='relative border border-primary/50 w-72 max-w-full mb-3'>
            <img src={thumbnail} alt={title} />
            <figcaption className='absolute bottom-2 right-2 text-primary'>
              {brand}
            </figcaption>
          </figure>
          {availabilityStatus === 'Low Stock' && (
            <p className='text-sm text-orange-600/60'>
              Only {stock} items in stock.
            </p>
          )}
          <section className='mb-6 flex justify-between items-center'>
            <div>
              <h3 className='font-serif text-lg text-primary mb-3 line-clamp-1'>
                {title}
              </h3>
              <div className='flex justify-start items-center gap-6 mb-6'>
                <p className='font-serif text-xl text-primary'>{price}</p>
                {discountPercentage > 0 && (
                  <p className='font-serif text-sm p-1 px-4 rounded-full bg-red-600 text-primary-light'>
                    {roundFigure(discountPercentage)}% off incl.
                  </p>
                )}
              </div>
            </div>
            <div className='flex items-start gap-3'>
              <button
                className='flex gap-2 items-center bg-primary text-white py-2 pr-3 pl-3 rounded-full outline outline-1 outline-primary outline-offset-2'
                onClick={() => addToCart(product as CartProduct)}
              >
                <span>Shop</span>
                <CartIcon className='size-5' />
              </button>
            </div>
          </section>
          <p className='tracking-wide text-slate-700'>{description}</p>
        </div>

        <aside className='md:sticky md:top-6 h-full md:bg-primary-light/50 md:p-6'>
          <div className='mb-6'>
            <h3 className='mb-2 font-serif text-lg text-primary'>Warranty</h3>
            <hr className='border-primary' />
            <p className='mt-2 text-slate-600'>{warrantyInformation}</p>
          </div>
          <div className='mb-6'>
            <h3 className='mb-2 font-serif text-lg text-primary'>Shipping</h3>
            <hr className='border-primary' />
            <p className='mt-2 text-slate-600'>{shippingInformation}</p>
          </div>

          <div className='mb-6'>
            <h3 className='mb-2 font-serif text-lg text-primary'>Dimension</h3>
            <hr className='border-primary' />
            <p className='mt-2 text-slate-600'>
              {dimensions.width} &times; {dimensions.height} &times;{' '}
              {dimensions.depth}
            </p>
          </div>
          <div className='mb-6'>
            <h3 className='mb-2 font-serif text-lg text-primary'>
              Availability
            </h3>
            <hr className='border-primary' />
            <p className='mt-2 text-slate-600'>{availabilityStatus}</p>
          </div>
        </aside>

        <section className='w-full mt-6'>
          <h3 className='mb-2 font-serif text-lg text-primary'>Reviews</h3>
          <hr className='border-primary' />
          <Reviews reviews={reviews} />
        </section>
      </div>
    </div>
  );
};

export default ProductId;
