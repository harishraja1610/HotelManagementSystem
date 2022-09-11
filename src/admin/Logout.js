import { render } from "@testing-library/react";
import { Navigate } from "react-router";


function Logout(){
        return( 
            <Navigate replace to={'/'}/>
        )
        }
export default Logout;