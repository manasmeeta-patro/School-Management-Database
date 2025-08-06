import { Link } from "react-router";
function NavBar(){

    return <div className='container'>
    
   <Link className="link" to= "/"> Home </Link>
   <Link className="link" to="/Login">Login</Link>
   <Link className="link" to="/About">About </Link>
   <Link className="link" to="/College">college </Link>
   

   </div>


}
export default NavBar;