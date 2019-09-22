import {ADD_TO_CART} from "./types";

export function addToCart(productsInfo, quantity){
    return {
        type: ADD_TO_CART,
        productsInfo, 
        quantity
    }
}
