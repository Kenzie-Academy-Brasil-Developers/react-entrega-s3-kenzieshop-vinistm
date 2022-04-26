import { ADD_TO_CART,FINISH_ORDER, REMOVE_FROM_CART } from "./actionsTypes";

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    product,
})

export const removeFromCart = (list) => ({
    type: REMOVE_FROM_CART,
    list,
})

export const finishiOrder = (list) => ({
    type:FINISH_ORDER,
    list,
})