import "./PaymentMethods.css";

export const PaymentMethods = () => {
  return (
    <div className="p-3 mt-3 border-top" id="payment-methods">
      <h6 className="fw-bold">Medios de pago</h6>

      <div className="installments-container border border-success p-2 rounded d-flex align-items-center gap-2 mb-3">
        <i className="bi bi-credit-card-2-front"></i>
        <span>
          <i className="fa-solid fa-credit-card" />
          &nbsp;¡Paga en <strong>hasta 12 cuotas sin interés</strong>!
        </span>
      </div>

      <div className="mb-2">
        <p className="mb-1 fw-semibold">Tarjetas de crédito</p>
        <small className="text-muted">
          ¡Cuotas sin interés con bancos seleccionados!
        </small>
        <div className="d-flex flex-wrap gap-2 mt-2">
          <img
            src="/src/assets/images/master-card.png"
            alt="Mastercard"
            className="credit-card-logos me-2"
          />
          <img
            src="/src/assets/images/visa.png"
            alt="Visa"
            className="credit-card-logos me-2"
          />
          <img
            src="/src/assets/images/amex.png"
            alt="Amex"
            className="credit-card-logos me-2"
          />
          <img
            src="/src/assets/images/oca.png"
            alt="OCA"
            className="credit-card-logos me-2"
          />
        </div>
      </div>

      <div className="mb-2">
        <p className="mb-1 fw-semibold">Tarjetas de débito</p>
        <div className="d-flex flex-wrap gap-2 mt-2">
          <img
            src="/src/assets/images/visa.png"
            alt="Visa Débito"
            className="credit-card-logos me-2"
          />
          <img
            src="/src/assets/images/master-card.png"
            alt="Mastercard Débito"
            className="credit-card-logos me-2"
          />
        </div>
      </div>

      <a
        href="#"
        className="text-primary text-decoration-none small mt-2 d-inline-block mb-2"
      >
        Conoce otros medios de pago
      </a>
    </div>
  );
};
