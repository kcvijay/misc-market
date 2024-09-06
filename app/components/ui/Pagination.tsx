import { Link } from '@remix-run/react';
import ChevronLeft from '../icons/ChevronLeft';
import ChevronRight from '../icons/ChevronRight';

const Pagination = ({
  query,
  nextPage,
  prevPage,
  totalPages,
  currentPage,
}: {
  query: string;
  nextPage: string;
  prevPage: string;
  totalPages: number;
  currentPage: string;
}) => {
  const isFirstPage = parseInt(currentPage) === 1;
  const isLastPage = parseInt(currentPage) === totalPages;
  return (
    <div className='relative flex justify-between items-center mt-12 gap-6'>
      {isFirstPage ? (
        <span className='disabled-button inline-flex items-center gap-1 bg-primary/50 text-white py-2 pl-3 pr-4 rounded-full cursor-not-allowed'>
          <ChevronLeft className='size-4' />
          <span>Prev</span>
        </span>
      ) : (
        <Link
          to={`/products?query=${query}&page=${prevPage}`}
          className='flex items-center gap-1 bg-primary text-white py-2 pl-3 pr-4 rounded-full'
        >
          <ChevronLeft className='size-4' />
          <span>Prev</span>
        </Link>
      )}
      <span className='bg-primary/50 h-[1px] grow' />
      {isLastPage ? (
        <span className='disabled-button inline-flex items-center gap-1 bg-primary/50 text-white py-2 pr-3 pl-4 rounded-full cursor-not-allowed z-10'>
          <span>Next</span>
          <ChevronRight className='size-4' />
        </span>
      ) : (
        <Link
          to={`/products?query=${query}&page=${nextPage}`}
          className='flex items-center gap-1 bg-primary text-white py-2 pr-3 pl-4 rounded-full z-10'
        >
          <span>Next</span>
          <ChevronRight className='size-4' />
        </Link>
      )}
    </div>
  );
};

export default Pagination;
