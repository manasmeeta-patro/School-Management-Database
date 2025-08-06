import { useRef, useState } from "react";
export default function Login(){
    const [name,setName]=useState('');
    const [pw,setPw]=useState('');
    const [tname,setTname]=useState('');
    const [tpw,setTpw]=useState('');
    // const inputRef=useRef();
    // const inputHandler=()=>{
    //     console.log("i m in clicking button")
    //     inputRef.current.focus();
    //     inputRef.current.style.color='red';
    //     inputRef.current.placeholder="Enter name";
    //     inputRef.current.value="username";
        
    // }
    const userRef=useRef();
    const pwRef=useRef();
     const inputHandler=(event)=>{
        event.preventDefault();
      const user=  document.querySelector("#user").value;
       const pw= document.querySelector("#pw").value;
       console.log(user,pw)
     }

      const inputHandlerT=(event)=>{
        event.preventDefault();
      const user= userRef.current.value;
      const pw=pwRef.current.value;
       console.log(user,pw)
     }
    return(
        <> 
       
        <h1> Student Login</h1>
        <form action="" method="post" onSubmit={inputHandler}>
        <input  type="text" id="user" onChange={(event)=>setName(event.target.value)} placeholder="enter User name" name="name"/><br/><br/>
        <input  type="password" id="pw" onChange={(event)=>setPw(event.target.value)} placeholder="enter PassWord" name="password"/><br/>
         {/* \\ checkbox button mking for showing pw */}
         <button>Login</button>
         </form>
         <h4>UserName:{name}</h4>
         <h4>Password:{pw}</h4>
         <hr/>
         <h1> Teacher Login</h1>
        <form action="" method="post" onSubmit={inputHandlerT}>
        <input ref={userRef}  type="text"  onChange={(event)=>setTname(event.target.value)} placeholder="enter User name" name="tname"/><br/><br/>
        <input ref={pwRef} type="password" onChange={(event)=>setTpw(event.target.value)} placeholder="enter PassWord" name="tpassword"/><br/>
         {/* \\ checkbox button mking for showing pw */}
         <button>Login</button>
         </form>
         <h4>UserName:{tname}</h4>
         <h4>Password:{tpw}</h4>

        
        </>
    )
}