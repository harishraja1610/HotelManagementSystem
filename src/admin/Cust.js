import { useCookies } from "react-cookie";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
function Cust(){
  const [cookies, setCookie] = useCookies();
  if(cookies.user=='admin'){
    return(
        <div className="column">

            <ul>
                <li><Link to="/addCust" >ADD Customer</Link></li>
                <li><Link to="/viewCust" >VIEW Customer</Link></li>
                <li><Link to="/updateCust" >UPDATE Customer</Link></li>
                <li><Link to="/deleteCust" >DELETE Customer</Link></li>
            </ul>
        </div>
    )
  }
  else{
    alert("login required")
    return(
    <Navigate replace to={'/'}/>);
  }
}
export default Cust;