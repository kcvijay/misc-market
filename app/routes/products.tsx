import { LoaderFunctionArgs } from '@remix-run/node';
import { Form, json, redirect, useLoaderData } from '@remix-run/react';
import ProductCard from '~/components/ui/ProductCard';
import { getAllProducts } from '~/utils/methods/actions';
import { Product } from '~/utils/misc/types';
import Pagination from '~/components/ui/Pagination';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const searchParams = new URL(request.url).searchParams;
  const query = searchParams.get('query') || '';
  const currentPage = searchParams.get('page') || '1';
  const skip = String((Number(currentPage) - 1) * 12) || '0';

  try {
    const allProducts = await getAllProducts(query, '12', skip);
    const products = allProducts.products;
    return json(
      { allProducts, products, query, currentPage },
      {
        headers: {
          'Cache-Control': 'public, max-age=60',
        },
      }
    );
  } catch (error) {
    return { error: 'Failed to get products' };
  }
};

export const action = async ({ request }: LoaderFunctionArgs) => {
  const formData = await request.formData();
  const query = formData.get('query') || '';
  return redirect(`/products?query=${query}&page=1`);
};

const Products = () => {
  const { allProducts, products, query, currentPage } = useLoaderData<
    typeof loader
  >() as {
    allProducts: { total: number; products: Product[] };
    products: Product[];
    query: string;
    currentPage: string;
  };

  const totalPages = Math.ceil(allProducts.total / 12);
  const nextPage = String(Number(currentPage) + 1);
  const prevPage = String(Number(currentPage) - 1);

  console.log(currentPage, totalPages);

  return (
    <div className='h-full'>
      <div className='flex justify-center items-center mt-3 mb-9'>
        <Form
          method='post'
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
      <section
        className={`${products.length > 3 ? 'grid-responsive' : 'flex gap-6'}`}
      >
        {products.length > 0 ? (
          products.map((product: Product) => (
            <ProductCard
              key={product.title}
              product={product}
              length={products.length}
            />
          ))
        ) : (
          <p className='w-full text-center text-slate-800'>
            No product found for the search term '{query}'.
          </p>
        )}
      </section>
      {products.length > 1 && (
        <Pagination
          query={query}
          currentPage={currentPage}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      )}
    </div>
  );
};

export default Products;
