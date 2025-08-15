import { Route, Routes } from "react-router"
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import College from "./college";
import Student from "./student";
import Teacher from "./teacher";
import UserList from "./UserList";

import "./App.css";
import AddUser from "./AddUser";
import NavBar from "./NavBar";
import UserDetails from "./UserDetails";
import ApiWithJson from "./ApiWithJson";
import UserEdit from "./UserEdit";

function App() {
  return( 
    
  <>
  <NavBar/>
   <br/><br/>
   <div className="routeClass">
  <Routes>
   <Route path="/About" element={<About/>}/>
   <Route path="/about/user/id" element={<AddUser/>}/>
    <Route path="/about/edit/:id" element={<UserEdit />} />
    
   <Route path="/Login" element={<Login/>}/>
  <Route path="/" element={<Home/>}/>
   <Route path="/in" element={<Home />} />
    <Route path="/in/user" element={<Home />} />

  
  
  <Route  path="/college" element={<College/>}>
  <Route  index element={<Student/>}/>
   <Route  path="student" element={<Student/>}/>
    <Route  path="teacher" element={<Teacher/>}/>
  </Route>
  <Route path="/user" element={<UserList/>}/>
  <Route path="/user/:id" element={<UserDetails/>}/>

  <Route path="/user/:id/:name?" element={<UserDetails/>}/>


   <Route path="/*" element={<PageNotFound/>}/>
  </Routes>
  </div>
  
  </> 

)
}

export default App
