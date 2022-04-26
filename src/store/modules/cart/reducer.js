import { FINISH_ORDER,ADD_TO_CART,REMOVE_FROM_CART } from "./actionsTypes";
const list = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = list, action) =>{
    const product = action.product;
    const {list} = action;

    switch(action.type){
        case ADD_TO_CART:
            return [...state, product]
        case REMOVE_FROM_CART:
            return list;
        case FINISH_ORDER:
            return list;
        default:
            return state;
    }
}
export default cartReducer;