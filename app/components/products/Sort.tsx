import { Form } from '@remix-run/react';

const Sort = ({ query, sortAndOrder }: { query: string, sortAndOrder: string }) => {
  return (
    <Form method='post'>
      <input type='hidden' name='search' value={query} />
      <select
        name='sortAndOrder'
        id='sortAndOrder'
        value={sortAndOrder}
        className='py-1 px-2 bg-primary text-primary-light shadow hover:shadow-none hover:bg-primary/80 active:text-slate-600 rounded'
        onChange={(e) => e.currentTarget.form?.submit()}
      >
        <option value='' disabled>
          Sort by
        </option>
        <option value='price:asc'>Price: Low to High</option>
        <option value='price:desc'>Price: High to Low</option>
        <option value='title:asc'>Title: A to Z</option>
        <option value='title:desc'>Title: Z to A</option>
      </select>
    </Form>
  );
};
export default Sort;
