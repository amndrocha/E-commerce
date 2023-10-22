import numeral from "numeral";
import { useDispatch, useSelector } from "react-redux"
import { visible } from "./Visible";
import {  useNavigate } from "react-router-dom";
import { addFavorito } from "./ProductsSlice";
import { setShowCategoria } from "./FilterSlice";

export const Favoritos = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    dispatch(setShowCategoria(""))
    const filtros = useSelector((state) => state.filter)
    const produtos = useSelector((state) => state.products)
    const produtosVisiveis = visible(produtos, filtros.showCategoria, filtros.text, filtros.sortBy, filtros.minPrice, filtros.maxPrice)
    
    return (
        <div className="page">
        <h1 style={{margin: 0, width: "100%", textAlign: "center"}}> Favoritos </h1>
        {produtosVisiveis.map((produto)=>{
                if (produto.favorito.img == "../images/favorito0.png"){  
                return(
                    <div className="listarFavoritos">
                        <div className="product-card-list"  key={produto.id}>                        
                            <img className="page-image" src={produto.image}/>
                            <div className="page-info">
                                <div className="page-info">
                                    <h3 style={{textDecoration: "underline", cursor: "pointer"}} onClick= {() => navigate(`/${produto.category}/${produto.id}`)}> {produto.name} </h3>
                                    <p>R{numeral(produto.price/100).format('$0,0.00')}</p> 
                                </div>  
                                <div style={{display: "flex", alignItems: "center", gap: "5px"}}>
                                    <img style={{margin: 0}} className='smallIcon'onClick={() => dispatch(addFavorito(produto.id))} src={produto.favorito.img}/>
                                    <span style={{whiteSpace: "nowrap"}}>{produto.favorito.txt}</span>
                                </div>                         
                            </div>
                        </div>
                    </div>


                    
                    
    
                ) }
            })} 
        
    </div> 
    )
    
}
