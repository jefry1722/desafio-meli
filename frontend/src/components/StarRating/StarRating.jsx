export const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);

  return (
    <div className="d-flex mt-1 text-primary">
      {[...Array(fullStars)].map((_, index) => {
        return <i key={index} className="fa fa-star" aria-hidden="true"></i>;
      })}
    </div>
  );
};
