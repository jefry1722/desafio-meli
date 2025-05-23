import "./ProductDetailPage.css";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { ProductInfo } from "../components/Products/ProductInfo/ProductInfo";
import { useEffect, useState } from "react";
import { getProductDetailByID } from "../services/products";

const ID = "123";

function ProductDetailPage() {
  const [productDetail, setProductDetail] = useState();

  useEffect(() => {
    getProductDetailByID(ID).subscribe({
      next: setProductDetail,
      error: () => setProductDetail(null),
    });
  }, []);

  return (
    productDetail && (
      <div className="body container my-4">
        <div className="row bg-white">
          <div className="col-lg-9">
            <ProductInfo
              title={productDetail.title}
              condition={productDetail.condition}
              soldQuantity={productDetail.soldQuantity}
              isMostSelled={productDetail.isMostSelled}
              reviews={productDetail.reviews}
              currency={productDetail.currency}
              prices={productDetail.prices}
              discount={productDetail.discount}
              color={productDetail.color}
              features={productDetail.features}
              colors={productDetail.colors}
              category={productDetail.category}
              description={productDetail.description}
            />
          </div>
          <div className="col-lg-3 pb-2">
            <Sidebar
              stock={productDetail.stock}
              seller={productDetail.seller}
              logo={productDetail.logo}
              banner={productDetail.banner}
              soldQuantity={productDetail.soldQuantity}
            />
          </div>
        </div>
      </div>
    )
  );
}

export default ProductDetailPage;
