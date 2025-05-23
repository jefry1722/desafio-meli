import "./ProductDetailPage.css";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { ProductInfo } from "../components/Products/ProductInfo/ProductInfo";
import { useEffect, useState } from "react";
import { getProductDetailByID } from "../services/products";

// const PRODUCT = {
//   id: "123",
//   title: "Samsung Galaxy A55 5G Dual SIM 256 GB 8 GB RAM",
//   condition: "Nuevo",
//   category: "Celulares",
//   description:
//     "Pantalla grande de 6.7. Expande tu visualización.Maximiza tu visualización con la pantalla grande de 6.7 del Galaxy A06. Con el desplazamiento fluido de 60 Hz y la pantalla TFT U-Cut, tendrás más espacio para disfrutar de tu contenido favorito. Experimenta la mejora.Diseño elegante. Perfil delgado.Mejora tu experiencia móvil con el elegante Galaxy A06. Ahora con un grosor reducido de 8.8 mm a 8.0 mm, el Galaxy A06 ofrece un aspecto elegante y sofisticado en los colores Negro, Celeste, Dorado y Verde.\nDestácate con un diseño increíble.Captura la vida en alta definiciónDescubre la potencia de la cámara de 50 MP del Galaxy A06. Captura fotos impresionantes y de calidad con la cámara de profundidad de 2 MP para añadir dimensión. La cámara frontal de 8 MP cubre todas tus necesidades fotográficas para garantizar tomas perfectas.\nAcceso seguro al alcance de la mano El desbloqueo del teléfono es pan comido gracias al sensor lateral de huellas dactilares. Ofrece una verificación fiable con una sola pulsación y permite establecer accesos directos con doble pulsación para la cámara u otras aplicaciones de uso frecuente.\nEnciéndelo. Mantente siempre conectado.Disfruta más de lo que te gusta sin preocuparte por la duración de la batería: el Galaxy A06 dura más con una sola carga gracias a su batería (uso típico) de 5000 mAh. Y con la carga rápida de 25 W, vuelve a la acción rápidamente.",
//   isMostSelled: true,
//   logo: "https://http2.mlstatic.com/D_NQ_NP_789332-MLA74975093701_032024-G.webp",
//   banner:
//     "https://st3.depositphotos.com/10313420/13098/i/450/depositphotos_130981024-stock-photo-logo-of-the-brand-samsung.jpg",
//   currency: "USD",
//   prices: {
//     realPrice: 500,
//     subTotal: 440,
//   },
//   soldQuantity: 1000,
//   discount: 12,
//   reviews: [
//     {
//       id: "1",
//       rating: 4.5,
//       comment: "Muy buen producto",
//     },
//     {
//       id: "2",
//       rating: 2,
//       comment: "Mal producto",
//     },
//   ],
//   stock: 49,
//   colors: [
//     {
//       value: "Azul oscuro",
//       icon: "https://http2.mlstatic.com/D_NQ_NP_2X_777643-MLA75395342152_042024-F.webp",
//       images: [
//         {
//           name: "Celular de frente",
//           url: "https://http2.mlstatic.com/D_NQ_NP_800035-MLA81367078349_122024-F.webp",
//         },
//         {
//           name: "Celular de lado",
//           url: "https://http2.mlstatic.com/D_NQ_NP_2X_621964-MLA81364948571_122024-F.webp",
//         },
//         {
//           name: "Celular trasero",
//           url: "https://http2.mlstatic.com/D_NQ_NP_2X_777643-MLA75395342152_042024-F.webp",
//         },
//         {
//           name: "Perrito",
//           url: "https://http2.mlstatic.com/D_NQ_NP_2X_725539-MLA80825742603_112024-F.webp",
//         },
//         {
//           name: "Descripción 1",
//           url: "https://http2.mlstatic.com/D_NQ_NP_2X_832248-MLA81366749957_122024-F.webp",
//         },
//         {
//           name: "Descripción 2",
//           url: "https://http2.mlstatic.com/D_NQ_NP_2X_780712-MLA81099188364_122024-F.webp",
//         },
//         {
//           name: "Caja",
//           url: "https://http2.mlstatic.com/D_NQ_NP_2X_868167-MLA81099064398_122024-F.webp",
//         },
//       ],
//     },
//     {
//       value: "Rosado",
//       icon: "https://http2.mlstatic.com/D_Q_NP_828657-MLA75395342112_042024-O.webp",
//       images: [
//         {
//           name: "Celular de frente",
//           url: "https://www.losdistribuidores.com/wp-content/uploads/2024/04/samsung-galaxy-a35-rosa.webp",
//         },
//         {
//           name: "Celular de lado",
//           url: "https://www.tecnogus.com.co/wp-content/uploads/2024/04/Samsung-Galaxy-A55.jpg",
//         },
//         {
//           name: "Celular trasero",
//           url: "https://http2.mlstatic.com/D_Q_NP_828657-MLA75395342112_042024-O.webp",
//         },
//         {
//           name: "Perrito",
//           url: "https://http2.mlstatic.com/D_NQ_NP_2X_725539-MLA80825742603_112024-F.webp",
//         },
//         {
//           name: "Descripción 1",
//           url: "https://http2.mlstatic.com/D_NQ_NP_2X_832248-MLA81366749957_122024-F.webp",
//         },
//         {
//           name: "Descripción 2",
//           url: "https://http2.mlstatic.com/D_NQ_NP_2X_780712-MLA81099188364_122024-F.webp",
//         },
//       ],
//     },
//   ],
//   seller: {
//     name: "Samsung",
//     rating: "MercadoLíder Platinum",
//     isVerified: true,
//     images: {
//       banner: "img",
//       profile:
//         "https://http2.mlstatic.com/D_NQ_NP_2X_777643-MLA75395342152_042024-F.webp",
//     },
//     description: "Tienda oficial de Mercado Libre",
//     productsAmount: 51,
//   },
//   features: [
//     "Memoria RAM: 8GB",
//     "Dispositivo desbloqueado para que elijas tu compañia telefonica preferida",
//     "Memoria interna de 256 GB",
//   ],
// };

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
