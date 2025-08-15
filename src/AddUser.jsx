import { useState } from "react"

export default function AddUser(){
    const [name,setName]=useState('');
    const [id,setId]=useState('');
    const [age,setAge]=useState('');
    // for evironment variable from vite to varcel deploy   
    const API_URL = import.meta.env.VITE_API_URL;

    let url='http://localhost:3000/users';
    const createUser=async()=>{
        console.log(name,id,age);
        let res= await fetch(url,{
            method:'post',
            body: JSON.stringify({id,name,age}),
        });
        res=await res.json();
        if(res){
            alert('new user added')
        }        
    }
    
   
    return(
        <>
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter user name"/>
        <br/>
         <input type="text" value={id} onChange={(event)=>setId(event.target.value)} placeholder="Enter id"/><br/>

          <input type="text" value={age} onChange={(event)=>setAge(event.target.value)} placeholder="Enter age"/>
            <br/>
            <button onClick={createUser}>Add User</button>
        </>
    )
}