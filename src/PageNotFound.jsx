import { Link } from "react-router";

export default function PageNotFound(){
    return(
        <> 
        <div style={{textAlign:'center'}}>
        <h3 style={{textAlign:'center'}}>Page Not Found </h3>
        <Link to="/" >Go to Homepage</Link>
        <br/>
        <img style={{width:'80rem', height:'50rem', objectFit:'cover'}} src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png" 
        alt="image not found"/>
        </div>
        </>
    )
}