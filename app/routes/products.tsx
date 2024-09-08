import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { json, redirect, useLoaderData } from '@remix-run/react';
import ProductCard from '~/components/products/ProductCard';
import { getAllProducts } from '~/utils/methods/actions';
import { Product } from '~/utils/misc/types';
import Pagination from '~/components/products/Pagination';
import ShowingResult from '~/components/products/ShowingResults';
import SearchForm from '~/components/form/SearchForm';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const searchParams = new URL(request.url).searchParams;
  const query = searchParams.get('query') || '';
  const currentPage = searchParams.get('page') || '1';
  const productsPerPage = 12;
  const skip = String((Number(currentPage) - 1) * productsPerPage) || '0';

  try {
    const allProducts = await getAllProducts(
      query,
      productsPerPage.toString(),
      skip
    );
    const products = allProducts.products;
    const total = allProducts.total;
    return json(
      { allProducts, total, products, query, productsPerPage, currentPage },
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
  return redirect(`/products?query=${query}&page=1`);
};

const Products = () => {
  const { allProducts, total, products, query, productsPerPage, currentPage } =
    useLoaderData<typeof loader>() as {
      allProducts: { total: number; products: Product[] };
      total: number;
      products: Product[];
      query: string;
      productsPerPage: number;
      currentPage: string;
    };

  /* Pagination */
  const totalPages = Math.ceil(allProducts.total / 12);
  const nextPage = String(Number(currentPage) + 1);
  const prevPage = String(Number(currentPage) - 1);

  /* Results */
  const resultStartFrom = (Number(currentPage) - 1) * productsPerPage + 1;
  const resultEndTo = Number(currentPage) * productsPerPage;

  return (
    <div className='h-full'>
      <div className='flex justify-center items-center mt-3 mb-9'>
        <SearchForm query={query} />
      </div>

      {/* Products Mapping Section */}
      {products.length > 0 ? (
        <section>
          <ShowingResult
            total={total}
            from={resultStartFrom}
            to={resultEndTo}
          />
          <div
            className={`${
              products.length > 3 ? 'grid-responsive' : 'flex gap-6 flex-wrap'
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
        <p className='w-full text-center text-slate-800'>
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

export default Products;
