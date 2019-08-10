import Products from "./products.json";

export function getAll(){
    return Promise.resolve(Products);
}

export default {
    getAll
}