import products from "./api/products.json";
import { getCartProductFromLS } from "./getCartProductFromLS";
import {fetchQuantityFromCardLS} from "./fetchQuantityFromCardLS"

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) => {
  // console.log( curProd.id);
  return cartProducts.some((curElem) => curElem.id === curProd.id);
});
console.log(filterProducts);

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProducts.forEach((curProd) => {
    const { category, id, image, name, stock, price } = curProd;
    let productClone = document.importNode(templateContainer.content, true);

    const lSActualData = fetchQuantityFromCardLS(id, price);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;

    productClone.querySelector(".productQuantity").textContent =
      lSActualData.quantity;
    productClone.querySelector(".productPrice").textContent =
      lSActualData.price;

    cartElement.append(productClone);
  });
};
showCartProduct();
