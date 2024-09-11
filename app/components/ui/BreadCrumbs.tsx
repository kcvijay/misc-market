import { Link } from '@remix-run/react';
import { BreadCrumbLinks } from '~/utils/misc/types';

const BreadCrumbs = ({ links }: { links: BreadCrumbLinks[] }) => {
  return (
    <nav className='font-sans text-sm'>
      <ol className='flex gap-2'>
        {links.map((link, index) => (
          <li key={index}>
            {link.isCurrentPage ? (
              <span className='text-slate-500'>{link.title}</span>
            ) : (
              <Link to={link.href}>
                <span className='text-primary'>{link.title}</span> /
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
