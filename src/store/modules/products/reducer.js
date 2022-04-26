import { ADD_PRODUCT } from "./actionsTypes";
const products =[
    
    {id:1,name:"Barra Olímpica Oficial Crossfit 20kg",price: 939.00, image:"https://img.irroba.com.br/fit-in/150x150/filters:format(webp):fill(fff):quality(95)/flexfitc/catalog/fotos-redimensionadas-centauro/1-azul-2.jpg"},
    {id:2,name:"Kit Anilha Olimpica 100kg",price: 2584.00, image:"https://img.irroba.com.br/fit-in/150x150/filters:format(webp):fill(fff):quality(95)/flexfitc/catalog/anillhas-fotos-redirecionadas/anilha-2.jpeg"},
    {id:3,name:"Kit 3 Barras Olimpicas Oficial Presilhas", price: 2552.00,image:"https://img.irroba.com.br/filters:fill(fff):quality(95)/flexfitc/catalog/fotos-redimensionadas-centauro/amarela-azul-vermelha-4.jpg"},
    {id:4,name:"Kit 5 barras Olimpica oficial",price:4086.00, image:"https://img.irroba.com.br/filters:fill(fff):quality(95)/flexfitc/catalog/fotos-redimensionadas-centauro/5-barras-azul-vermelha-e-amarela-5.jpg"},
    {id:5,name:"Barra Olimpica Oficial Crossfit 14kg Presilhas",price: 749.00,image:"https://img.irroba.com.br/filters:fill(fff):quality(95)/flexfitc/catalog/fotos-redimensionadas-centauro/1-verde-5.jpg"},
    {id:6,name:"Tênis Nike Metcon 7x Feminino",price:749.99, image:"https://images.lojanike.com.br/500x500/produto/tenis-nike-metcon-7-x-feminino-DA9625-121-1-11626190315.jpg"},
    {id:8,name:"Tênis Nike Metcon 7x Masculino",price:749.99, image:"https://images.lojanike.com.br/500x500/produto/tenis-nike-metcon-7-x-feminino-DA9625-121-1-11626190315.jpg"},
    {id:7,name:"Tênis Nanoflex TR",price:499.99,image:"https://assets.reebok.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/b0f0ccd8265749c9b632ae7e00de89e9_9366/Tenis_Nanoflex_TR_Cinza_GZ0251_01_standard.jpg"},
    {id:9,name:"Tênis Nanoflex TR2",price:499.99,image:"https://assets.reebok.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/b0f0ccd8265749c9b632ae7e00de89e9_9366/Tenis_Nanoflex_TR_Cinza_GZ0251_01_standard.jpg"},
    {id:10,name:"Kit Anilha Olimpica 150kg",price: 2999.00, image:"https://img.irroba.com.br/fit-in/150x150/filters:format(webp):fill(fff):quality(95)/flexfitc/catalog/anillhas-fotos-redirecionadas/anilha-2.jpeg"},

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