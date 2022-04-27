import { useDispatch, useSelector } from "react-redux";
import Product from "../Product"
import {finishOrderThunk} from "../../store/modules/cart/thunks"
import { Span,Container,Lista,Total,Pedido,Value } from "./style";
const Order =() => {
    const cart = useSelector((state)=> state.cart)
    const dispatch = useDispatch();
    const handleFinish =() => {
        dispatch(finishOrderThunk())
    }
    return(
        <Total>
            {cart [0] ? (
                <>
                    <Lista>
                        <ul>
                            {cart && cart.map((item,index)=>(
                                <Product key={index} item ={item} btnActive={false}></Product>
                            ))}
                        </ul>
                    </Lista>
                    <Pedido>
                        <h2>Pedido</h2>
                        <Value>
                            <span>{cart.length} Produtos selecionados</span>
                            <span className="valor">Valor total </span>
                            <span className="valorTotal">R$ {" "} {cart.reduce((acc,curr)=>{return acc+curr.price},0).toFixed(2)}</span>
                        </Value>
                        <button onClick={handleFinish}>Finalizar Pedido</button>
                    </Pedido>
                </>
            ):(
                <Container>
                <Span>Carrinho vazio</Span>
                </Container>
            )}
        </Total>
    )
}
export default Order