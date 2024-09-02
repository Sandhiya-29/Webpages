import React from "react";
class UnControlled extends React.Component{
    constructor(props){
        super(props)

        this.submit=this.submit.bind(this)
        this.username=React.createRef();
        this.password=React.createRef();
    }

    submit(event){
        event.preventDefault();
        console.log(this.username.current.value)
        console.log(this.password.current.value)
    }

    render(){
        return(
            <div>
                <form>
                    <input style={{backgroundColor:"pink",border:"none",borderRadius:"7px"}} 
                    type="text" placeholder="username" name="username" ref={this.username}/>
                    <br/><br/>
                    <input  style ={{backgroundColor:"pink",border:"none",borderRadius:"7px"}}
                    type="text" placeholder="password"name="password" ref={this.password}/>
                <br/><br/>
                    <button type="submit" onClick={this.submit} style={{backgroundColor:"blue",width:"80px",
                    borderRadius:"30px",color:"white"}}>
                        Login</button>
                </form>
            </div>
        )
    }
}
export default UnControlled          
                
