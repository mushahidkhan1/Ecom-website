import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const removeProdFromCart = (id) => {
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id); 

    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts)); 

    let removeDiv = document.getElementById(`card${id}`)
    if(removeDiv){
        removeDiv.remove();

        showToast("delete",id);
    }
    updateCartValue(cartProducts);
    updateCartProductTotal();
}