import { useRef, useState } from "react";
export default function Login(){
    const [name,setName]=useState('');
    const [pw,setPw]=useState('');
    const inputRef=useRef();
    const inputHandler=()=>{
        console.log("i m in clicking button")
        inputRef.current.focus();
        inputRef.current.style.color='red';
        inputRef.current.placeholder="Enter name";
        inputRef.current.value="username";
        
    }
    return(
        <> 
       
        <h1> User Login</h1>
        <form action="">
        <input ref={inputRef} type="text" onChange={(event)=>setName(event.target.value)} placeholder="enter User name" name="name"/><br/><br/>
         <input type="password" onChange={(event)=>setPw(event.target.value)} placeholder="enter PassWord" name="password"/><br/>
         {/* \\ checkbox button mking for showing pw */}
         <button onClick={inputHandler}>Login</button>
         </form>
         <h4>UserName:{name}</h4>
         <h4>Password:{pw}</h4>
        
        </>
    )
}