import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
} from '@remix-run/node';
import { Form, Outlet, redirect } from '@remix-run/react';
import SearchForm from '~/components/form/SearchForm';

export const meta: MetaFunction = () => {
  return [
    { title: 'Misc. Marketplace' },
    {
      name: 'description',
      content:
        'Misc. Marketplace - Application created with Remix, TypeScript and DummyJSON REST API',
    },
  ];
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const query = formData.get('search') || '';
  return redirect(`/products?query=${query}&page=1`);
};

export default function Index() {
  return (
    <div>
      <section className='text-center max-w-1/2'>
        <div className='mt-6 mb-9'>
          <h2 className='font-serif text-2xl lg:text-4xl text-primary mb-6 transition-all'>
            Find Everything You Need
          </h2>
          <div className='flex justify-center'>
            <SearchForm />
          </div>
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
