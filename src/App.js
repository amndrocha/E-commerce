import { NavLink, Outlet, RouterProvider, createBrowserRouter, useNavigate, useParams } from "react-router-dom";
import { Page } from "./Page";
import { PageCarrinho } from "./Carrinho";
import { Header } from "./Header";
import { Detalhes } from "./Detalhes";
import { Favoritos } from "./Favoritos"


function  App() {
    
    const Navbar = () =>{
        return(
            <div className="navbar">
                <NavLink className={ ( {isActive} ) => isActive ? "navbar_item-clicked" : "navbar_item"} to='/'> Todos</NavLink>
                <NavLink className={ ( {isActive} ) => isActive ? "navbar_item-clicked" : "navbar_item"} to='/necessarios'> Necessários</NavLink>
                <NavLink className={ ( {isActive} ) => isActive ? "navbar_item-clicked" : "navbar_item"} to='/moveis'> Móveis</NavLink>
                <NavLink className={ ( {isActive} ) => isActive ? "navbar_item-clicked" : "navbar_item"} to='/celular'> Celular</NavLink>  
            </div>
        )
    }
    
    const HeaderLayout = () => {
        return(
            <div>
                <Navbar/>
                <Outlet/>
            </div>
        )
    }
    
    
    
    const router = createBrowserRouter([
        {
            element:
            <div>
                <Header/>
                <HeaderLayout/>
            </div>,
            children: [
                {path: '/',element:<Page/>},
                {path: '/:categoria',element:<Page/>},
                {path: '/carrinho',element:<PageCarrinho/>},
                {path: '/:categoria/:id', element:<Detalhes/>},
                {path: '/favoritos',element:<Favoritos/>}
            ]
           }
    ])
    
    return (    
      <div>
        <RouterProvider router={router}/>
      </div>  
    );
}
export default App;
