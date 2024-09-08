import { Form } from '@remix-run/react';
import Input from './Input';
import SubmitButton from './SubmitButton';

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form method='post' className='min-w-60 max-w-72 flex items-center gap-3'>
      <Input
        type='search'
        name='search'
        placeholder='Search products...'
        defaultValue={query}
        required
        className='grow py-2 px-4 text-primary border border-primary focus:outline focus:outline-2 focus:outline-primary outline-offset-1 rounded-full'
      />
      <SubmitButton type='submit'>
        <span>Search</span>
      </SubmitButton>
    </Form>
  );
};

export default SearchForm;
