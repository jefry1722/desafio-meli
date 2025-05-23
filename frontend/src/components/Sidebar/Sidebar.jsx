import { Checkout } from "./Checkout/Checkout";
import { PaymentMethods } from "./PaymentMethods/PaymentMethods";
import { SellerInfo } from "./SellerInfo/SellerInfo";

export const Sidebar = ({ stock, seller, logo, banner, soldQuantity }) => {
  return (
    <div className="card d-flex flex-column gap-3 shadow-sm mt-2">
      <div className="row"></div>
      <Checkout
        stock={stock}
        name={seller?.name}
        logo={logo}
        description={seller?.description}
        soldQuantity={soldQuantity}
      />
      <SellerInfo
        name={seller?.name}
        rating={5}
        logo={logo}
        banner={banner}
        description={seller?.description}
        productsAmount={seller?.productsAmount}
        isVerified={seller?.isVerified}
      />
      <PaymentMethods />
    </div>
  );
};
