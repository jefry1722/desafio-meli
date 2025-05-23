import "./SellerInfo.css";

export const SellerInfo = ({
  name,
  logo,
  banner,
  description,
  productsAmount,
  isVerified,
}) => {
  return (
    <div className="p-3 bg-white">
      <div
        className="position-relative rounded overflow-hidden"
        style={{ height: "100px" }}
      >
        <img
          src={banner}
          alt="banner"
          className="w-100 h-100 object-fit-cover"
        />
        <img
          src={logo}
          alt="logo"
          className="seller-logo position-absolute translate-middle object-fit-contain"
        />
      </div>

      <h6 className="mb-0 fw-bold">{name}</h6>
      <small className="text-muted">
        {isVerified && (
          <i className="text-primary fa fa-certificate" aria-hidden="true" />
        )}
        &nbsp;
        {description}
      </small>

      <p className="mt-2 mb-1 text-muted">{`${productsAmount} Productos`}</p>

      <button className="btn btn-outline-primary btn-sm mt-3 w-100">
        Ir a la Tienda oficial
      </button>
    </div>
  );
};
