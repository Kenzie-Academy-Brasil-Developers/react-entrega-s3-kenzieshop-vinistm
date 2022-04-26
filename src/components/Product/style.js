import styled from "styled-components"

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap:15px;
    width:320px;
    height:450px;
    padding:10px;
    border-radius:8px;
    margin:5px;
    background: linear-gradient(351deg, rgba(0,0,0,0.5130427170868348) 0%, rgba(213,211,211,0.6530987394957983) 3%);
    img{
        width:300px;
        height:250px;
        border-radius:5px;
        box-shadow: 3px 12px 51px -15px rgba(0,0,0,0.59);
        
    }
    .caixa{
      display:flex;
      flex-direction:column;
      gap:15px;
      background-color:#EEEEEE;
      width:100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      border-radius:8px;
    }
    p{
       font-size:18px;
       font-weight:800;
    }

    span:hover{
        font-size:14px;
        color: red;
        font-style:italic;
        animation: focus-in-contract-bck 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    @keyframes focus-in-contract-bck {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(300px);
            transform: translateZ(300px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(12px);
            transform: translateZ(12px);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}

    button{
        height:35px;
        width:250px;
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