import {  useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function UserEdit(){
    
    const {id}=useParams();
     const [name,setName]=useState('');
    const [userid,setId]=useState('');
    const [age,setAge]=useState('');
    let url = `http://localhost:3000/users/${id}`; // ✅ Proper template literal

    const navigate=useNavigate();
   

   
    
    const getUserData=async()=>{
        console.log(name,age,userid)
        try{
        
        let res = await fetch(url);
        res=await res.json();
        console.log(res);
       setAge(res.age);
       setName(res.name);
       setId(res.userid);
       console.log(setName);}
       catch{console.log("error")}
    }
     const updateUser=async()=>{
        console.log(name,id,age);
        let res= await fetch(url,{
            method:'put',
            body: JSON.stringify({userid,name,age}),
        });
        res=await res.json();
        if(res){
            alert('user updated');
            navigate('/about');
        }        
    }
    
    getUserData();
    
   
    return(
        <>
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter user name"/>
        <br/>
         <input type="text" value={id} onChange={(event)=>setId(event.target.value)} placeholder="Enter id"/><br/>

          <input type="text" value={age} onChange={(event)=>setAge(event.target.value)} placeholder="Enter age"/>
            <br/>
            <button onClick={updateUser}>Edit user</button>
        </>
    )
    
}

