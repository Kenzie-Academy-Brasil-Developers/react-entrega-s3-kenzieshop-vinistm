import styled from "styled-components"

export const MenuList = styled.div`
    cursor:pointer;
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height:80px;
    background-color:gray;
    border-radius:0px 0px 12px 12px;
    opacity:0.7;
`
export const MenuOption = styled.div`
 display:flex;
 align-items: center;
 justify-content: space-around;
 width:100%;
 height:100%;
 color:white;
 font-size:18px;

 .Entrar{
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height:100%;
    border-left:2px #7A7A7A double;
 }
 .Entrar:hover{
    background-color:#3c3c3c;
    border-radius:0px 0px 12px 0px;
    animation: text-focus-in 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    
 }
 .Cart{
   display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height:100%;
    border-left:2px #7A7A7A double;
    
 }
 .Cart:hover{
   background-color:#4C4C4C ;
   animation: text-focus-in 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
 }
 .KenzieShop{
   display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height:100%;
 }
 .KenzieShop:hover{
    background-color:#787878 ;
   border-radius:0px 0px 0px 12px;
   animation: text-focus-in 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
 }
 @keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}


`
