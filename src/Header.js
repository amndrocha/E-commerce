import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setFilterText } from "./FilterSlice"

export const Header = () => {
    const filter = useSelector((state) =>  state.filter)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    return(
        <div className="header">
            <h1>TWIST</h1>
            <input type ='text' className="header_search" value ={filter.text} onChange ={(e) => dispatch(setFilterText(e.target.value))} placeholder="Busca aqui seu produto"/>
            <img className="header_cart" src='../images/carrinho2.png'alt='carrinho' onClick={() => navigate('/carrinho')}/>
            <img className="header_fave" src='../images/favorito.png' onClick={() => navigate('/favoritos')}/> 
        </div>
        
    )
}