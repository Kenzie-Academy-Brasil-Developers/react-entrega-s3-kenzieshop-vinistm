import { ADD_PRODUCT } from "./actionsTypes"
export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    product,
});