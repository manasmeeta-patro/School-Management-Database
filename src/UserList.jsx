import { Link } from "react-router"

export default function UserList(){
    const userData =[{id:1, name:"anil", email:"anil@gm.com"},
        {id:2, name:"mama", email:"mama@gm.com"},
        {id:3, name:"alil", email:"alil@gm.com"},
        {id:4, name:"bruce", email:"bruce@gm.com"},
        {id:5, name:"anilis", email:"anilis@gm.com"},
    ]
    return<div>
        <br/>
        <h3>User LIst Table {userData.id} </h3>
        {
        userData.map((item)=>(<div key={item.id}>
        
            <h5><Link to={"/user/"+ item.id}>{item.name}-- {item.email}</Link>
            </h5>
            </div>))

                }

                <h3>User LIst Table data with name in url {userData.id} </h3>
        {
        userData.map((item)=>(<div key={item.id}>
        
            <h5><Link to={"/user/"+ item.id +"/"+ item.name}>
            {item.id}
            {item.name}
             {item.email}</Link>
            </h5>
            </div>))

                }
    </div>
}