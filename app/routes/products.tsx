import { LoaderFunctionArgs } from '@remix-run/node';
import { Form, json, redirect, useLoaderData } from '@remix-run/react';
import ProductCard from '~/components/ui/ProductCard';
import { getAllProducts } from '~/utils/methods/actions';
import { Product } from '~/utils/misc/types';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const searchParams = new URL(request.url).searchParams;
  const query = searchParams.get('query') || '';
  try {
    const allProducts = await getAllProducts(query);
    const products = allProducts.products;
    return json({ products, query });
  } catch (error) {
    return { error: 'Failed to get products' };
  }
};

export const action = async ({ request }: LoaderFunctionArgs) => {
  const searchParams = new URL(request.url).searchParams;
  const query = searchParams.get('query') || '';
  redirect(`/products?query=${query}`);
};

const Products = () => {
  const { products, query } = useLoaderData<typeof loader>() as {
    products: Product[];
    query: string;
  };

  return (
    <div className='h-full'>
      <div className='flex justify-center items-center mt-3 mb-9'>
        <Form
          method='get'
          className='min-w-60 max-w-72 flex items-center gap-3'
        >
          <input
            type='search'
            name='query'
            placeholder='Search products...'
            defaultValue={query}
            className='grow py-2 px-4 text-primary border border-primary focus:outline focus:outline-2 focus:outline-primary outline-offset-1 rounded-full'
          />
          <button
            type='submit'
            className='bg-primary text-white py-2 px-4 rounded-full'
          >
            Search
          </button>
        </Form>
      </div>
      <section className='h-full flex flex-wrap gap-6'>
        {products.map((product: Product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </section>
    </div>
  );
};

export default Products;
