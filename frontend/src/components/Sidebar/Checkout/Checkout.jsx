import "./Checkout.css";

export const Checkout = ({ stock, name, logo, description, soldQuantity }) => {
  return (
    <div className="border-bottom pt-0 p-3 bg-white">
      <p className="text-success mb-1 fw-semibold">
        Envío gratis a todo el país
      </p>
      <p className="mb-1 text-secondary">
        Conoce los tiempos y las formas de envío.
      </p>
      <a href="#" className="text-decoration-none d-block mb-3">
        Calcular cuándo llega
      </a>

      {stock > 0 && (
        <>
          <p className="fw-semibold mb-1">Stock disponible</p>

          <div className="mb-3">
            <div className="mb-1 d-flex">
              Cantidad:&nbsp;
              <select className="unit-selector w-20">
                <option value="1">1 Unidad</option>
                <option value="1">2 Unidades</option>
              </select>
            </div>
            &nbsp;
            <small className="text-muted">{`(${stock}) disponibles`}</small>
          </div>
        </>
      )}

      <div className="d-grid gap-2 mb-3">
        <button className="btn btn-primary">Comprar ahora</button>
        <button className="btn btn-outline-primary">Agregar al carrito</button>
      </div>

      <div className="d-flex align-items-center mb-3">
        <img
          src={logo}
          alt="Logo"
          width="32px"
          height="32px"
          className="seller-logo me-2"
        />
        <div>
          <div className="small">
            {description}&nbsp;
            <a
              href="#"
              className="text-primary text-decoration-none fw-semibold"
            >
              {name}
            </a>
          </div>
          <div className="small text-muted">{soldQuantity} ventas</div>
        </div>
      </div>

      <ul className="list-unstyled small text-muted">
        <li className="mb-2">
          <i className="fa fa-undo" aria-hidden="true" />
          &nbsp;
          <strong className="text-primary">Devolución gratis</strong>. Tienes 30
          días desde que lo recibes.
        </li>
        <li className="mb-2">
          <i className="fa-solid fa-shield" />
          &nbsp;
          <strong className="text-primary">Compra Protegida</strong>, recibe el
          producto que esperabas o te devolvemos tu dinero.
        </li>
        <li>
          <i className="fa-solid fa-trophy" />
          &nbsp;1 año de garantía de fábrica.
        </li>
      </ul>
    </div>
  );
};
