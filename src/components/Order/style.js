import styled from "styled-components"
export const Span = styled.span`
font-size:50px;
color:white;
display:flex;
`

export const Container = styled.div`
width:500px;
height:600px;
display:flex;
align-items: center;
margin:auto;
margin-top:150px;
background-color:gray;
justify-content: center;
border-radius:10px;
border:20px solid white;
opacity:0.8;
`

export const Lista = styled.div`
display:flex;

ul{
    display:flex;
    flex-wrap: wrap;
    width:100%;
    height:100%;
    
    
}
`

export const Total = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:auto;

`

export const Pedido = styled.div`
display:flex;
flex-direction:column;
justify-content: space-around;
width:300px;
height:200px;
background: linear-gradient(351deg,rgba(0,0,0,0.5130427170868348) 0%,rgba(213,211,211,0.6530987394957983) 3%);
align-items: center;
border-radius: 10px;

position: fixed; 
width: 300px; 
height: 300px; 
right:80px;
top:85px;


h2{
    font-size:30px;
}
button{
    height:40px;
    width:270px;
    border-radius: 10px;
    border:none;
    cursor: pointer;
    font-size:15px
}
button:hover{
        animation: vibrate-1 0.3s linear infinite both;
        background-color:#85D600;
        color:white
    }
    @keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}

`
export const Value = styled.div`
display:flex;
flex-direction:column;
gap:15px;

.valor{
    font-size:15px;
    color:red;
}
.valorTotal{
    font-size:25px;
    font-style:italic;
    font-weight:bold;
    color:green;
}
`