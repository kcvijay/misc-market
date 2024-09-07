import { formatDate } from '~/utils/misc/dates';
import RatingStars from '~/components/ui/RatingStars';

const Reviews = ({ reviews }: { reviews: any }) => {
  return (
    <>
      {reviews.map((review: any) => (
        <article key={review.date} className='py-2 border-b border-b-primary/50'>
          <p>
            <RatingStars rating={review.rating} />
          </p>
          <p className='text-slate-600 mb-2'>{review.comment}</p>
          <div className='flex flex-col gap-1 items-end'>
            <p className='text-primary'>{review.reviewerName}</p>
            <p className='text-sm text-slate-600'>{formatDate(review.date)}</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default Reviews;
