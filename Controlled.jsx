import { toHaveDisplayValue } from "@testing-library/jest-dom/matchers";
import React from "react";

class Controlled extends React.Component{

    constructor(props){
        super(props)
        this.state={
            username:"",
            password:"",
            isLoginsuccess:false,
            isLoginfails:false

        }
        this.inputOnchange=this.inputOnchange.bind(this)
        this.submit=this.submit.bind(this)
    }
    inputOnchange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    
    submit(event){
        event.preventDefault();
        console.log(this.state.username,this.state.password)

        if(this.state.username==="dhiya"&& this.state.password==="12345"){
        this.setState({
            isLoginsuccess:true,
            isLoginfails:false
        }
        )
        }else{
            this.setState({
                isLoginsuccess:false,
                isLoginfails:true
            }
            )
        }
    }

    render(){
        return(
<div>
<form>
        <input  style ={{backgroundColor:"pink",border:"none"}}  
    type="text" placeholder="username" name="username"value={this.state.username}
    onChange={this.inputOnchange}/>
        <br/><br/>
         <input  style ={{backgroundColor:"pink",border:"none"}}
         type="text" placeholder="password"name="password" val={this.state.password}
         onChange={this.inputOnchange}/>
        <br/><br/>
     <button type="submit" onClick={this.submit} class="btn btn-info">Login</button>
                </form>
                <Loginactivity isSuccess={this.state.isLoginsuccess} 
                isFails={this.state.isLoginfails}/>
</div>
        )
    }
}


function Loginactivity(props){
    if(props.isSuccess||props.isFails){
        return props.isSuccess? <div class="alert alert-primary" role="alert">successfully</div>:
        <div class="alert alert-danger" role="alert">Logged in Fails</div>
    }
        
    
}
export default Controlled;