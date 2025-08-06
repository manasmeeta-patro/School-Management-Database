import { useParams } from "react-router";
import {Link} from "react-router-dom"
import UserList from "./UserList";
export default function UserDetails(){
    
    const paramdata= useParams();
    console.log(paramdata.id);
    return<div>
       
    <h2>user id: {paramdata.id}--{paramdata.name}</h2>
   
    <h3>
        <Link to="/users">
        Back
        </Link>
        </h3>
        
        
        </div>
}