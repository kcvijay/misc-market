import { LoaderFunctionArgs } from '@remix-run/node';
import { Form, json, useLoaderData } from '@remix-run/react';
import ProductCard from '~/components/ui/ProductCard';
import { getAllProducts } from '~/utils/methods/actions';
import { Product } from '~/utils/misc/types';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const searchParams = new URL(request.url).searchParams;
  const query = searchParams.get('query') || '';
  try {
    const allProducts = await getAllProducts(query);
    return { allProducts, query };
  } catch (error) {
    return { error: 'Failed to get products' };
  }
};

const Products = () => {
  const { allProducts, query } = useLoaderData<typeof loader>() as {
    allProducts: Product[];
    query: string;
  };
  return (
    <div className='h-full'>
      <Form method='get' className='flex items-center gap-3 mb-6'>
        <input
          type='search'
          name='query'
          placeholder='Search products'
          defaultValue={query}
          className='max-w-56 py-2 px-4 border border-slate-300 rounded'
        />
        <button
          type='submit'
          className='bg-blue-500 text-white py-2 px-4 rounded'
        >
          Search
        </button>
      </Form>
      <section className='h-full flex flex-wrap gap-6'>
        {allProducts.products.map((product: Product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </section>
    </div>
  );
};

export default Products;
