import React, { useState } from "react";  
import './LoginSignup.css';


const LoginSignup = () => {

    const [action,setaction] = useState("Sign Up");

    return (
        <div className="container">
            <div className="header">
             <div className="text">{action}</div>
             <div className="underline"></div>   
            </div>
            <br></br>
            <div className="inputs">
              {action==="Login"?<div></div> : <div className="inputs">
        
            <div className="inputs">Name</div>
        <input type="text" placeholder="Enter name"/>
        
        </div>}
            
                <br />
            <div className="inputs">
            <div className="inputs">Email</div>
                <input type="email" placeholder="Enter Email"/>
              </div> 
               
            </div>
            <br />
            <div className="inputs">
            <div className="inputs">Password</div>
                <input type="password" placeholder="Enter Password"/>
              </div> 
               
                    <br></br>
                    {action=== "Sign Up"?<div></div> : <div className="forgot-password">Forgot Password? <span>Click here</span></div>}
                    
               <br></br>
               <div className="submit-container">
               <div className={action === "Login"?"submit gray" : "submit"} onClick={() => {setaction("Sign Up")}}>Sign Up</div>
               <br></br>
               <div className={action=== "Sign Up"?"submit gray" : "submit"} onClick={() => {setaction("Login")}}>Login</div>
              </div> 
            </div>  
        
    )
}

export default LoginSignup