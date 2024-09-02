import { useState } from "react"
import{useNavigate} from "react-router-dom"

function Login(){

    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()
   
   let login=(event)=>{
    event.preventDefault()
    console.log("navigate")
    if(username==="sandhiya"&& password=="12345"){
       navigate("/home")
    }
   }

    
        return(
<div>
<form>
        <input  style ={{backgroundColor:"pink",border:"none"}}  
    type="text" placeholder="username" name="username"value={username}/>
        <br/><br/>
         <input  style ={{backgroundColor:"pink",border:"none"}}
         type="text" placeholder="password"name="password" value={password}/>
        <br/><br/>
     <button type="submit" onClick={login} class="btn btn-info">Login</button>
                </form>
                
</div>
        )
    }
export default Login;