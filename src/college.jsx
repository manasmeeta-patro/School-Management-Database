import { NavLink, Outlet } from "react-router"
export default function College(){
    return(
        <> 
        <h2>college details:: </h2>
        <div style={{display:"flex", textAlign:"center", gap:"2rem",fontSize:"30px"}}>
            
            <br/>
        <NavLink className="link" to= "student"> Student details </NavLink>
        <NavLink className="link" to= "teacher"> Teacher details </NavLink>
        </div>
        <Outlet/>
        </>
    )
}