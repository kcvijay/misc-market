import { Link } from '@remix-run/react';

const PaginationLink = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) => {
  return (
    <Link
      to={to}
      className='flex items-center gap-2 bg-primary text-white py-2 px-4 rounded-full shadow hover:bg-primary/80 active:text-slate-600 hover:shadow-none'
    >
      {children}
    </Link>
  );
};
export default PaginationLink;
