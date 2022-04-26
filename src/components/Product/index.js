import {removeFromCartThunk} from "../../store/modules/cart/thunks"
import addToCartThunk from "../../store/modules/cart/thunks"
import { useDispatch } from "react-redux"
import { Container } from "./style";
import { toast } from "react-toastify";

const Product = ({item,btnActive}) => {
    const { name, price,image, id } = item;
    const dispatch = useDispatch()
    const handleAddProduct = () => {
        dispatch(addToCartThunk(item))
        toast.success('Produto adicionado', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        
    }
    const handleRemoveProduct = () =>{
        dispatch(removeFromCartThunk(id))
        toast.info('Produto removido !', {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        
    }

    return(
        <Container btnActive={btnActive}>
            <figure><img src={image}/></figure>
            <div className="caixa">
                <p>{name}</p>
                <span>R$ {price.toFixed(2)}</span>
                <button onClick={btnActive ? handleAddProduct : handleRemoveProduct }> {btnActive ? "Adicionar ao carrinho" : "Remover"}</button>
            </div>
       </Container>
    )

}
export default Product;