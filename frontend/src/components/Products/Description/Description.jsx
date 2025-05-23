import "./Description.css";

export const Description = ({ description }) => {
  return (
    <div className="p-4">
      <h3 className="mt-1">Descripción</h3>
      {description?.split("\n").map((paragraph, idx) => (
        <p key={idx} className="product-description mb-2 text-secondary">
          {paragraph}
        </p>
      ))}
    </div>
  );
};
