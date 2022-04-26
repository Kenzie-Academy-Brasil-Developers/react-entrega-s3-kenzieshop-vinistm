import Product from "../Product";
import { useSelector } from "react-redux";
import { Container, List } from "./style";

const ProductList =() =>{
    const {products} = useSelector((state) => state);
    return(
        <Container>
            <List>
                {products.map((item,index)=>(
                    <Product key={index} item={item} btnActive={true}></Product>
                ))}
            </List>
        </Container>
    )
}
export default ProductList