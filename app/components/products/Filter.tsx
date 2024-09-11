import XIcon from '../icons/XIcon';
import DisabledPaginationLink from '../ui/DisabledPaginationLink';

const Filter = ({ closeFilter }: { closeFilter: () => void }) => {
  const classBackdrop =
    'fixed top-0 left-0 w-screen h-screen bg-black/30 z-[999]';
  return (
    <div className={classBackdrop}>
      <div className='relative animate-slideRight bg-white p-6 min-h-[100dvh] max-w-[400px] shadow-lg'>
        <p className='text-red-500'>Under construction !</p>
        <button
          className='absolute top-4 right-4 bg-primary-light p-1 rounded-full'
          onClick={closeFilter}
        >
          <XIcon className='size-6 text-primary' />
        </button>
        <h2 className='font-serif text-primary text-lg mb-4'>Filter</h2>
        <form className='flex flex-col'>
          <div>
            <div className='mb-4'>
              <h3 className='text-primary mb-2'>Category</h3>
              <hr className='border-primary/50 mb-2' />
              <div className='flex flex-col gap-1'>
                <label>
                  <input
                    type='radio'
                    name='category'
                    value='electronics'
                    className='accent-primary mr-2'
                  />
                  Electronics
                </label>
                <label>
                  <input
                    type='radio'
                    name='category'
                    value='beauty'
                    className='accent-primary mr-2'
                  />
                  Beauty
                </label>
                <label>
                  <input
                    type='radio'
                    name='category'
                    value='home'
                    className='accent-primary mr-2'
                  />
                  Home
                </label>
              </div>
            </div>
            <div className='mb-4'>
              <h3 className='text-primary mb-2'>Price</h3>
              <hr className='border-primary/50 mb-2' />
              <div className='flex flex-col gap-1'>
                <label>
                  <input
                    type='radio'
                    name='category'
                    value='0-100'
                    className='accent-primary mr-2'
                  />
                  0 - 100
                </label>
                <label>
                  <input
                    type='radio'
                    name='price'
                    value='101-500'
                    className='accent-primary mr-2'
                  />
                  101 - 500
                </label>
                <label>
                  <input
                    type='radio'
                    name='price'
                    value='501-1000'
                    className='accent-primary mr-2'
                  />
                  501 - 1000
                </label>
                <label>
                  <input
                    type='radio'
                    name='price'
                    value='1001-3000'
                    className='accent-primary mr-2'
                  />
                  1001 - 3000
                </label>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center mt-6'>
            <button
              type='reset'
              className='text-primary py-2 px-4 rounded-full'
            >
              Clear
            </button>
            <DisabledPaginationLink>Apply</DisabledPaginationLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
