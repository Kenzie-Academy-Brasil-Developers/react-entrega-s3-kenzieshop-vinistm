import { useDispatch, useSelector } from "react-redux";
import Product from "../Product"
import {finishOrderThunk} from "../../store/modules/cart/thunks"
const Order =() => {
    const cart = useSelector((state)=> state.cart)
    const dispatch = useDispatch();
    const handleFinish =() => {
        dispatch(finishOrderThunk())
    }
    return(
        <div>
            {cart [0] ? (
                <>
                    <div>
                        <ul>
                            {cart && cart.map((item,index)=>(
                                <Product key={index} item ={item} btnActive={false}></Product>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2>Pedido</h2>
                        <div>
                            <span>{cart.length} Produtos selecionados</span>
                            <span>Valor total </span>
                            <span>R$ {" "} {cart.reduce((acc,curr)=>{return acc+curr.price},0).toFixed(2)}</span>
                        </div>
                        <button onClick={handleFinish}>Finalizar Pedido</button>
                    </div>
                </>
            ):(
                <span>Carrinho vazio</span>
            )}
        </div>
    )
}
export default Order