import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { setShowCategoria, setSortBy, setPriceFilter, setView } from "./FilterSlice"
import { visible } from "./Visible"
import numeral from "numeral"



export const  Page = () => {

    const filtros = useSelector((state) => state.filter)
    const produtos = useSelector((state) => state.products)
    const params = useParams()
    const dispatch = useDispatch()
    dispatch(setShowCategoria(params.categoria)) // filtrando categoria para params
    const produtosVisiveis = visible(produtos, filtros.showCategoria, filtros.text, filtros.sortBy, filtros.minPrice, filtros.maxPrice) //filtros dos produtos 
    const navigate = useNavigate();
    

    return (
        <div className="page">
            <div className="top-row">
                <div>
                    visualização:
                    <select style={{marginLeft: "10px"}} value={filtros.view} onChange={(e) => {
                        dispatch(setView(e.target.value))}}>
                        <option value='product-card-list'>lista</option>
                        <option value='product-card-grid'>grade</option>
                    </select>
                </div>       
                <div>
                    ordenar por:
                    <select style={{marginLeft: "10px"}} value={filtros.sortBy} onChange={(e) => {
                        dispatch(setSortBy(e.target.value))}}>
                        <option value='price'>preço</option>
                        <option value='alphabetical'> A-Z</option>
                    </select>
                </div>
                <div>
                    filtrar preço:
                    <select style={{marginLeft: "10px"}} value={filtros.priceFilter} onChange={(e) => {
                        dispatch(setPriceFilter(e.target.value))}}>
                        <option value='1'>ver tudo</option>
                        <option value='2'>até R$50,00</option>
                        <option value='3'>R$50,00 a R$250,00</option>
                        <option value='4'>R$250,00 a R$750,00</option>
                        <option value='5'>mais de R$750,00</option>
                    </select>
                </div>                          
            </div>
            
            {produtosVisiveis.map((produto)=>{
                let vetorEstrelaPrenchiada = [...Array(produto.star).keys()]
                let estrelaVazia = 5 - produto.star
                let vetorEstrelaVazia = [...Array(estrelaVazia).keys()]

                return(
                    <Link className={filtros.view} onClick= {() => navigate(`/${produto.category}/${produto.id}`)} key={produto.id}>
                        <img className="page-image" src={produto.image}/>
                        <div className="page-info">
                            <div>
                                <h3 style={{marginRight: "100px"}}> {produto.name} </h3>
                                
                                    {vetorEstrelaPrenchiada.map((estrelas) => {
                                        return(
                                            <img  width ='20px' src ='../images/starP.png'/>
                                        )
                                    })}
                                    {vetorEstrelaVazia.map((estrelas) => {
                                        return(
                                            <img width ='20px' src ='../images/starV.png'/>
                                        )
                                    })}
                                    
                            </div>
                            <p>R{numeral(produto.price/100).format('$0,0.00')}</p>
                        </div> 
                                                  
                    </Link>
                //exibir o nome, a imagem do produto e o preço
                ) 
            })}

            <div className={filtros.view} style={{opacity: "0"}}></div>
            <div className={filtros.view} style={{opacity: "0"}}></div>
            <div className={filtros.view} style={{opacity: "0"}}></div>
        </div>
        
    )
}
