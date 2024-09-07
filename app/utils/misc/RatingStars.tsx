const RatingStars = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: rating }, (_, i) => i + 1);
  return (
    <>
      {stars.map((star, i) => (
        <span key={i} className='text-primary/50'>
          ★
        </span>
      ))}
    </>
  );
};
export default RatingStars;
