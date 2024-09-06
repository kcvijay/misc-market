import type { MetaFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Dummy Marketplace' },
    {
      name: 'description',
      content:
        'Dummy Marketplace - Application created with Remix, TypeScript and DummyJSON REST API',
    },
  ];
};

export default function Index() {
  return (
    <div className='font-sans p-4'>
      <h1 className='text-3xl'>Dummy Market</h1>
      <p>Welcome to dummy marketplace website</p>
      <Outlet />
    </div>
  );
}
