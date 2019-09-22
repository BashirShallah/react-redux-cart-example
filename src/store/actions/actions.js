import {ADD_TO_CART} from "./types";

export function addToCart(productInfo, quantity){
    return {
        type: ADD_TO_CART,
        productInfo, 
        quantity
    }
}
