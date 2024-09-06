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
    <div className='bg-home-image font-serif flex-grow grid place-content-center text-center'>
      <section className='p-12 bg-primary-light shadow'>
        <div className='mb-6'>
          <h2 className='text-primary text-xl sm:text-2xl md:text-4xl font-bold mb-4'>
            A to Z
          </h2>
          <p className='text-base md:text-xl'>
            Find everything, in Dummy Marketplace
          </p>
        </div>
        <div>
          <Form method='post' className='flex items-center gap-3 mb-6'>
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
      </section>

      <Outlet />
    </div>
  );
}
