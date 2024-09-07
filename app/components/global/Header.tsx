import { Link, NavLink } from '@remix-run/react';
import { useEffect, useState } from 'react';
import useCart from '~/hooks/useCart';

export const Header = () => {
  const { cartItems } = useCart();
  return (
    <header className='font-serif h-16 p-6 bg-primary-light/25 text-primary border-b border-b-primary/50'>
      <section className='flex justify-between items-center max-w-[1200px] mx-auto'>
        <nav>
          <NavLink to='/' className='text-2xl'>
            Misc. Market
          </NavLink>
        </nav>
        <nav className='flex items-center gap-6 text-lg'>
          <NavLink
            to='/products'
            className={({ isActive }) => (isActive ? 'font-bold' : '')}
          >
            Products
          </NavLink>
          <NavLink
            to='/cart'
            className={({ isActive }) =>
              isActive ? 'relative font-bold' : 'relative'
            }
          >
            Cart
            <span className='absolute font-sans font-thin -top-4 -right-4 size-6 text-center bg-primary text-white text-xs rounded-full p-1'>
              {cartItems}
            </span>
          </NavLink>
        </nav>
      </section>
    </header>
  );
};
