import products from "./api/products.json";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { fetchQuantityFromCardLS } from "./fetchQuantityFromCardLS";
import { removeProdFromCart} from "./removeProdFromCart"
import { incrementDecrement } from "./incrementDecrement";
import { updateCartProductTotal } from "./updateCartProductTotal";
    

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) => {
  // console.log( curProd.id);
  return cartProducts.some((curElem) => curElem.id === curProd.id);
});


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

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock,price);

      });

    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeProdFromCart   (id));

    cartElement.append(productClone);
  });
};
updateCartProductTotal();
showCartProduct();


