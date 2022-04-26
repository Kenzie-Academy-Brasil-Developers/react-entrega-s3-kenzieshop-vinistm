import { addToCart, removeFromCart, finishiOrder } from "./actions";

const addToCartThunk = (product, setError) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  list.push(product);
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(addToCart(product));
};

export default addToCartThunk;

export const removeFromCartThunk = (id) => (dispatch, getStore) => {
  const { cart } = getStore();
  console.log(id);
  console.log(cart);

  const list = cart.filter((product) => product.id !== id);
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(removeFromCart(list));
};

export const finishOrderThunk = () => (dispatch) => {
  const list = [];
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(finishiOrder(list));
  alert("Pedido efetuado com sucesso");
};