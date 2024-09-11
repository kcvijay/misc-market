import ChevronLeft from '../icons/ChevronLeft';
import ChevronRight from '../icons/ChevronRight';
import PaginationLink from '../ui/PaginationLink';
import DisabledPaginationLink from '../ui/DisabledPaginationLink';

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
    <div className='relative flex justify-between items-center mt-6 gap-6'>
      {isFirstPage ? (
        <DisabledPaginationLink>
          <ChevronLeft className='size-4' />
          <span>Prev</span>
        </DisabledPaginationLink>
      ) : (
        <PaginationLink to={`/products?query=${query}&page=${prevPage}`}>
          <ChevronLeft className='size-4' />
          <span>Prev</span>
        </PaginationLink>
      )}
      <span className='line h-[1px] bg-primary/50 w-full' />
      {isLastPage ? (
        <DisabledPaginationLink>
          <span>Next</span>
          <ChevronRight className='size-4' />
        </DisabledPaginationLink>
      ) : (
        <PaginationLink to={`/products?query=${query}&page=${nextPage}`}>
          <span>Next</span>
          <ChevronRight className='size-4' />
        </PaginationLink>
      )}
    </div>
  );
};

export default Pagination;
