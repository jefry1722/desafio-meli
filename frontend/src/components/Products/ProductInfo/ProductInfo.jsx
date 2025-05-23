import "./ProductInfo.css";
import { StarRating } from "../../StarRating/StarRating";
import { ImageGallery } from "../ImageGallery/imageGallery";
import { useState } from "react";
import { Description } from "../Description/Description";
import { Reviews } from "../Reviews/Reviews";

export const ProductInfo = ({
  title,
  condition,
  soldQuantity,
  isMostSelled,
  prices,
  discount,
  features,
  reviews,
  currency,
  colors,
  category,
  description,
}) => {
  const rating =
    reviews.reduce(
      (previousValue, currentValue) =>
        previousValue.rating + currentValue.rating
    ) / reviews.length;

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <>
      <div className="card p-2 mt-2">
        <div className="row">
          <div className="col-lg-5 col-sm-5">
            <ImageGallery
              images={selectedColor?.images}
              defaultImage={selectedColor?.images[0]}
            />
          </div>

          <div className="col-md-7 col-lg-7">
            <div className="text-muted mb-1">
              {condition} | +{soldQuantity < 500 ? soldQuantity : 500} vendidos
            </div>
            <div className="d-flex">
              {isMostSelled && (
                <h5 className="most-selled text-white px-2 py-1 rounded fw-bold">
                  MÁS VENDIDO
                </h5>
              )}
              &nbsp;
              <a href="#" className="text-decoration-none">
                {category}
              </a>
            </div>

            <h4 className="fw-bold mb-3">{title}</h4>
            <div className="d-inline-flex">
              <h5 className="text-muted me-2">{rating}</h5>
              <StarRating rating={rating} />
              <h6 className="text-muted mt-1 ms-2">{`(${reviews?.length})`}</h6>
            </div>

            <div>
              <span className="fs-6 text-decoration-line-through">
                {currency}$ {prices.realPrice}
              </span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <span className="fs-3 fw-bold">
                {currency}$ {prices.subTotal}
              </span>
              <span className="text-success ms-2">
                {discount > 0 && `${discount}% OFF`}
              </span>
            </div>

            <a
              href="#payment-methods"
              className="text-decoration-none mb-3 d-block"
            >
              Ver medios de pago y promociones
            </a>

            <div className="mb-3">
              Color:&nbsp;
              <strong>{selectedColor?.value}</strong>
            </div>

            <div className="color-image-container">
              {colors?.map((color) => (
                <img
                  key={color?.value}
                  alt="logo"
                  className="color-image border rounded mb-4"
                  src={color?.icon}
                  onClick={() => setSelectedColor(color)}
                ></img>
              ))}
            </div>

            <div className="mb-4">
              <h6 className="fw-bold">
                Lo que tienes que saber de este producto:
              </h6>
              <ul className="ps-3">
                {features?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <a href="#" className="text-primary text-decoration-none">
                Ver características
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card p-2 mt-2">
        <div className="row">
          <Description description={description} />
        </div>
      </div>
      <div className="card p-2 mt-2 mb-3">
        <div className="row">
          <Reviews reviews={reviews} />
        </div>
      </div>
    </>
  );
};
