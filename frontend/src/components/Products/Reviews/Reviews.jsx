import { StarRating } from "../../StarRating/StarRating";

export const Reviews = ({ reviews }) => {
  return (
    <div className="p-4">
      <h3>Opiniones destacadas</h3>
      {reviews?.length > 0 ? (
        <>
          <p className="text-secondary"> {`${reviews?.length} comentarios`}</p>
          <div>
            {reviews?.map((review) => (
              <div key={review?.id} className="mb-3">
                <StarRating rating={review?.rating} />
                <p>{review?.comment}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-secondary">No hay comentarios</p>
      )}
    </div>
  );
};
