import { ADD_PRODUCT } from "./actionsTypes";
const products =[
    
    {name:"teste",price: 10.00, image:"link-teste"},
    {name:"teste",price: 10.00, image:"link-teste"}

];

const productsReducer = (state = products, action) => {
    switch(action.type){
        case ADD_PRODUCT:
            const product = action.product;
            return[...state,product];
        default:
            return state;
    }
}
export default productsReducer;