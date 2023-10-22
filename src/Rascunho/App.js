import React from "react";
import  router  from "./routes";
import { RouterProvider } from "react-router-dom";

export const App = () =>{
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
}
