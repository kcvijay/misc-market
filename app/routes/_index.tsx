import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
} from '@remix-run/node';
import { Form, Outlet, redirect } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Dummy Marketplace' },
    {
      name: 'description',
      content:
        'Dummy Marketplace - Application created with Remix, TypeScript and DummyJSON REST API',
    },
  ];
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const query = formData.get('query') || '';
  return redirect(`/products?query=${query}`);
};

export default function Index() {
  return (
    <div>
      <section className='text-center max-w-1/2'>
        <div className='mt-6 mb-9'>
          <h2 className='font-serif-fancy text-4xl text-primary mb-6'>
            Find Everything You Need
          </h2>
          <Form
            method='post'
            className='max-w-72 flex items-center justify-center mx-auto gap-3'
          >
            <input
              type='search'
              name='query'
              placeholder='Search products...'
              required
              className='grow py-2 px-4 text-primary border border-primary rounded-full focus:outline focus:outline-2 focus:outline-primary outline-offset-1'
            />
            <button
              type='submit'
              className='bg-primary text-white py-2 px-4 rounded-full'
            >
              Search
            </button>
          </Form>
        </div>
        <ResponsiveHero />
      </section>
    </div>
  );
}

const ResponsiveHero = () => {
  return (
    <figure className='h-full flex gap-6 justify-center flex-wrap'>
      <img
        src='shopping-bags.jpg'
        alt='A model with shopping bags'
        className='hidden grow md:block w-36 max-h-[400px] object-cover'
      />
      <img
        src='products.jpg'
        alt='All kinds of beauty products'
        className='grow w-56 max-w-full max-h-[400px] object-cover'
      />
      <img
        src='makeup.jpg'
        alt='Makeup kits'
        className='hidden grow min-w-56 max-h-[400px] sm:block object-cover'
      />
    </figure>
  );
};
