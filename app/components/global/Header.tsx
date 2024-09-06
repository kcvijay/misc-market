import { Link, NavLink } from '@remix-run/react';

export const Header = () => {
  return (
    <header className='font-serif h-16 p-6 bg-primary-light/25 text-primary border-b border-b-primary/50'>
      <section className='flex justify-between items-center max-w-[1200px] mx-auto'>
        <nav>
          <NavLink to='/' className='text-2xl'>
            Dummy Market
          </NavLink>
        </nav>
        <nav className='flex items-center gap-6 text-lg'>
          <NavLink to='/products' className=''>
            Products
          </NavLink>
          <NavLink to='/cart' className=''>
            Cart
          </NavLink>
        </nav>
      </section>
    </header>
  );
};
