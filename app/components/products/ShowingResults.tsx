const ShowingResult = ({
  total,
  from,
  to,
}: {
  total: number;
  from: number;
  to: number;
}) => {
  return (
    <p className='text-slate-600'>
      Showing <span className='font-bold'>{from}</span> to{' '}
      <span className='font-bold'>{to <= total ? to : total}</span> of{' '}
      <span className='font-bold'>{total}</span> results
    </p>
  );
};

export default ShowingResult;
