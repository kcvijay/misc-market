import { json, useLoaderData } from '@remix-run/react';
import Reviews from '~/components/ui/Reviews';
import { getProductById } from '~/utils/methods/actions';
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
  const {
    title,
    price,
    brand,
    description,
    discountPercentage,
    thumbnail,
    dimensions,
    stock,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    reviews,
  } = useLoaderData<typeof loader>();
  return (
    <div>
      <div className='flex md:flex-row flex-col'>
        <div className='w-fulll md:w-[66vw] pr-6'>
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
          <section className='mb-12'>
            <h3 className='font-serif text-lg text-primary mb-3 line-clamp-1'>
              {title}
            </h3>
            <div className='flex justify-start items-center gap-6 mb-3'>
              <p className='font-serif text-xl text-primary'>{price}</p>
              {discountPercentage > 0 && (
                <p className='font-serif text-sm p-1 px-4 rounded-full bg-red-600 text-primary-light'>
                  {roundFigure(discountPercentage)}% off incl.
                </p>
              )}
            </div>
            <p className='tracking-wide text-slate-700'>{description}</p>
          </section>
        </div>

        <aside className='w-full md:w-[33vw] bg-primary-light/50 p-6 border border-primary/50'>
          <div className='mb-6'>
            <h3 className='mb-2 font-serif text-lg text-primary'>Warranty</h3>
            <hr className='border-primary' />
            <p className='mt-2'>{warrantyInformation}</p>
          </div>
          <div className='mb-6'>
            <h3 className='mb-2 font-serif text-lg text-primary'>Shipping</h3>
            <hr className='border-primary' />
            <p className='mt-2'>{shippingInformation}</p>
          </div>

          <div className='mb-6'>
            <h3 className='mb-2 font-serif text-lg text-primary'>Dimension</h3>
            <hr className='border-primary' />
            <p className='mt-2'>
              {dimensions.width} &times; {dimensions.height} &times;{' '}
              {dimensions.depth}
            </p>
          </div>
          <div className='mb-6'>
            <h3 className='mb-2 font-serif text-lg text-primary'>
              Availability
            </h3>
            <hr className='border-primary' />
            <p className='mt-2'>{availabilityStatus}</p>
          </div>
        </aside>
      </div>

      <section className='w-full md:w-[50vw] mt-6'>
        <h3 className='mb-2 font-serif text-lg text-primary'>Reviews</h3>
        <hr className='border-primary' />
        <Reviews reviews={reviews} />
      </section>
    </div>
  );
};

export default ProductId;
