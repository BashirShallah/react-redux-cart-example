import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/types";

export default function cartReduer(state, action){

    switch(action.type){
        case ADD_TO_CART: {
            return {
                cart: [
                    ...state.cart,
                    {
                        product: action.productInfo,
                        quantity: action.quantity
                    }
                ]
            }
        }

        case REMOVE_FROM_CART: {
            const item_index = action.index;
            const new_state = {...state};
            new_state.cart.splice(item_index, 1);
            return new_state;
        }

        case CLEAR_CART: {
            const new_state = {...state};
            new_state.cart = [];
            return new_state;
        }

        default:
            return state;
    }
}
