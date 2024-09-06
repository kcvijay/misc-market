import { Link, NavLink } from '@remix-run/react';

export const Header = () => {
  return (
    <header className='h-16 p-6 border-b'>
      <section className='flex justify-between items-center max-w-[1200px] mx-auto'>
        <nav>
          <NavLink to='/' className='text-blue-500'>
            Dummy Market
          </NavLink>
        </nav>
        <nav className='flex items-center gap-6'>
          <NavLink to='/products' className='text-blue-500'>
            Products
          </NavLink>
          <NavLink to='/cart' className='text-blue-500'>
            Cart
          </NavLink>
        </nav>
      </section>
    </header>
  );
};
