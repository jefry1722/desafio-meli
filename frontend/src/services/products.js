import axios from "axios";
import { from } from "rxjs";

export function getProductDetailByID(id) {
  return from(getRequest(`http://localhost:5000/products/${id}`));
}

function getRequest(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {})
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
}
