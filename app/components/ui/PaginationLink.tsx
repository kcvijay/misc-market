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
      className='flex items-center gap-1 bg-primary text-white py-2 px-4 rounded-full'
    >
      {children}
    </Link>
  );
};
export default PaginationLink;
