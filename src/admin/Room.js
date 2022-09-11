import { useCookies } from "react-cookie";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

function Room(){
    const [cookies, setCookie] = useCookies();
  if(cookies.user=='admin'){
    return(
        <div style={{textAlign:"center"}}>
            <ul>
            <li><Link to="/addRoom" >ADD Room</Link></li>
            <li><Link to="/updateRoom" >UPDATE Room</Link></li>
            <li><Link to="/viewRoom" >VIEW Room</Link></li>
            <li><Link to="/deleteRoom" >DELETE Room</Link></li>
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
export default Room;