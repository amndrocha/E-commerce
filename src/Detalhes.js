import numeral from "numeral"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { addCor, addFavorito, addQtd,addComentario} from "./ProductsSlice"


export const Detalhes = () =>{
    const vnum = [0,1,2,3,4,5,6,7,8,9]
    const optionColor = ['preto','vermelho', 'azul','amarelo','verde','branco','cinza']
    const qtdComment = [0,1,2,3,4]
    
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()
    const produtos = useSelector((state) => state.products)
    const prodExibido = produtos.find((produto) => produto.id == params.id)
   
    return(
        <div>
            <div className="detalhes">
                <div style={{display: "flex", alignItems: "center"}}>
                    <img className="imgDetalhes"src={prodExibido.image}/>
                </div>
                <div style={{width: "100%"}}>
                    <div style={{display: "flex", alignItems: "center", gap: "5px"}}>
                        <img style={{margin: 0}} className='smallIcon'onClick={() => dispatch(addFavorito(prodExibido.id))} src={prodExibido.favorito.img}/>
                        <span style={{whiteSpace: "nowrap"}}>{prodExibido.favorito.txt}</span>
                    </div>
                    <h1>{prodExibido.name}</h1>
                    <p> {prodExibido.description} </p>
                </div>
            <div className="sectionDetalhes">
                    <p className="tituloDetalhes">R{numeral(prodExibido.price/100).format('$0,0.00')}</p>
                    <div className="ordenarSelecao">
                        <div style={{display: "flex"}}>
                            <p style={{margin: 0}}>quantidade:</p>
                            <select className = 'selectOption'value = {prodExibido.qtd}
                            onChange={(e) => {
                                dispatch(addQtd({id: prodExibido.id, qtd: e.target.value}))
                            }}>
                            {vnum.map((numero)=>{
                                return(
                                    <option value={numero}>{numero}</option>
                                )
                            })}
                            </select>
                        </div>

                        <div style={{display: "flex"}}>
                            <p style={{margin: 0}}>cor:</p>
                            <select className = 'selectOption' value = {prodExibido.cor}
                            onChange ={(e) => dispatch(addCor({id: prodExibido.id, cor: e.target.value}))}>
                            {optionColor.map((cor) => {
                                    return(
                                        <option value={cor}>{cor}</option>
                                    )
                                })}
                            </select>
                        </div>                        
                    </div>
                    <button className="buttonDestalhes" onClick= {() => navigate('/')} > Adicionar ao carrinho </button>
                    <button className="buttonDestalhes" onClick= {() => navigate('/carrinho')} > Comprar </button>
                    
                    
                </div>
                
                
            </div>
            <div className="comentarioDetalhes">
                <h1> Comentários </h1>
                <div onChange ={(e) => dispatch(addComentario({id: prodExibido.id, comment: e.target.value}))}>
                    {qtdComment.map((numero) => {
                        if(prodExibido.comment[numero]){
                            return(
                                <p className="cadaComentario" value={numero}>{prodExibido.comment[numero]}</p>
                            )
                        }
                                
                            })}
                </div>
            </div>
        </div>
    )
}