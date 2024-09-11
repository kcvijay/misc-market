import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { json, redirect, useLoaderData, useRouteError } from '@remix-run/react';
import ProductCard from '~/components/products/ProductCard';
import { getAllProducts } from '~/utils/methods/actions';
import { Product } from '~/utils/misc/types';
import Pagination from '~/components/products/Pagination';
import ShowingResult from '~/components/products/ShowingResults';
import SearchForm from '~/components/form/SearchForm';
import AdjustmentsIcon from '~/components/icons/AdjustmentsIcon';
import Filter from '~/components/products/Filter';
import { useState } from 'react';
import Sort from '~/components/products/Sort';
import BreadCrumbs from '~/components/ui/BreadCrumbs';
import ExclamationIcon from '~/components/icons/ExclamationIcon';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const searchParams = new URL(request.url).searchParams;
  const query = searchParams.get('query') || '';
  const sortAndOrder = searchParams.get('sortBy') || '';
  const sortBy = String(sortAndOrder).split(':')[0] || '';
  const order = String(sortAndOrder).split(':')[1] || '';
  const currentPage = searchParams.get('page') || '1';
  const productsPerPage = 12;
  const skip = String((Number(currentPage) - 1) * productsPerPage) || '0';

  try {
    const allProducts = await getAllProducts(
      query,
      productsPerPage.toString(),
      skip,
      sortBy,
      order
    );
    const products = allProducts.products;
    const total = allProducts.total;
    return json(
      {
        allProducts,
        total,
        products,
        query,
        productsPerPage,
        currentPage,
        sortAndOrder,
      },
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

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const query = formData.get('search') || '';
  const sortAndOrder = formData.get('sortAndOrder') || ''; // e.g. format, price:asc

  if (sortAndOrder !== '') {
    return redirect(`/products?query=${query}&sortBy=${sortAndOrder}&page=1`);
  }
  return redirect(`/products?query=${query}&page=1`);
};

const Products = () => {
  const {
    allProducts,
    total,
    products,
    query,
    productsPerPage,
    currentPage,
    sortAndOrder,
  } = useLoaderData<typeof loader>() as {
    allProducts: { total: number; products: Product[] };
    total: number;
    products: Product[];
    query: string;
    productsPerPage: number;
    currentPage: string;
    sortAndOrder: string;
  };

  /* Pagination */
  const totalPages = Math.ceil(allProducts.total / 12);
  const nextPage = String(Number(currentPage) + 1);
  const prevPage = String(Number(currentPage) - 1);

  /* Results */
  const resultStartFrom = (Number(currentPage) - 1) * productsPerPage + 1;
  const resultEndTo = Number(currentPage) * productsPerPage;

  /* Cliend Side Filter Show/Hide */
  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => setShowFilter(!showFilter);

  return (
    <div className='relative h-full'>
      <div className='flex justify-center items-center mt-3 mb-3'>
        <SearchForm query={query} />
      </div>
      <BreadCrumbs
        links={[
          { title: 'Home', href: '/', isCurrentPage: false },
          { title: 'Products', href: '/products', isCurrentPage: true },
        ]}
      />

      {/* Products Mapping Section */}
      {products.length > 0 ? (
        <section className='mt-3'>
          <div className='show-result-count flex justify-between items-center flex-wrap gap-6 mb-3'>
            <ShowingResult
              total={total}
              from={resultStartFrom}
              to={resultEndTo}
            />
            <div className='sort-and-order flex justify-end items-center gap-3'>
              <button
                className='flex gap-2 items-center bg-primary text-primary-light py-1 px-2 shadow rounded hover:bg-primary/80 active:text-slate-600 hover:shadow-none'
                onClick={() => setShowFilter(true)}
              >
                <AdjustmentsIcon className='size-5' />
                <span>Filter</span>
              </button>
              <Sort query={query} sortAndOrder={sortAndOrder} />
            </div>
          </div>
          {showFilter && <Filter closeFilter={toggleFilter} />}
          <div
            className={`${
              products.length > 3
                ? 'map-result grid-responsive'
                : 'map-result flex gap-6 flex-wrap'
            }`}
          >
            {products.map((product: Product) => (
              <ProductCard
                key={product.title}
                product={product}
                length={products.length}
              />
            ))}
          </div>
        </section>
      ) : (
        <p className='show-no-result w-full text-center text-slate-800'>
          No product found for the search term '{query}'.
        </p>
      )}

      {allProducts.total > productsPerPage && (
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

export const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div className='mx-auto text-center flex flex-col items-center gap-3 mt-6'>
      <ExclamationIcon className='size-12 text-red-600/75' />
      <h2 className='text-primary text-lg'>Something unexpected happened !</h2>
      {error instanceof Error && (
        <p className='text-slate-600 text-sm'>{error.message}</p>
      )}
      <p className='text-sm'>Please check the URL and refresh the page.</p>
    </div>
  );
};

export default Products;
