import { NavLink } from "react-router";
import ApiWithJson from "./ApiWithJson";
import AddUser from "./AddUser";

export default function About(){
    return(
        <> 
        <h1> hi i m in About</h1>
        <ApiWithJson/>
        <NavLink to="/about/user/id" >Add User</NavLink>
        </>
    )
}