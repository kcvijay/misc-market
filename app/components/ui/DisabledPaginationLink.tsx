const DisabledPaginationLink = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <span className='disabled-button inline-flex items-center gap-1 bg-primary/50 text-white py-2 pr-3 pl-4 rounded-full cursor-not-allowed z-10'>
      {children}
    </span>
  );
};

export default DisabledPaginationLink;
