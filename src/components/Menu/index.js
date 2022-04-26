import { useHistory } from "react-router-dom";
import {MenuList, MenuOption} from "./style"

const Menu = () => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

 
  return (
    <div>
      <MenuList >
        <MenuOption>
          <div className="KenzieShop" onClick={() => sendTo("/")}>
          KenzieShop
          </div>
          <div className="Cart" onClick={() => sendTo("/cart")}>Carrinho</div>
           <div className="Entrar" onClick={() => sendTo("/")}>Entrar</div>
        </MenuOption>
        
      </MenuList>
    </div>
  );
};

export default Menu;