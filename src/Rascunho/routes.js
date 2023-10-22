import React from "react";
import { Link, NavLink, Outlet, createBrowserRouter} from "react-router-dom";

const router =  createBrowserRouter([
    {
        element:<HeaderLayout/>,
        errorElement: <PageError/>,
        children: [
            {path: '/',element: <Page/>},
            {path: '/other',element:<Other/>}
        ]

    }
])


const HeaderLayout =()=>(
    <div>
        <Navbar/>
        <Outlet/>
    </div>
);
const Navbar = () =>{
    return(
        <div>
            <NavLink to='/'>Page One</NavLink>
            <NavLink to='/other'>Page Two</NavLink>
        </div>
    );
};
export default router;
/*

const PageId =()=>{
    const params =  useParams()
    return (
        <div>
            <p> This id is {params.id} </p>
        </div>
    )
}
*/
