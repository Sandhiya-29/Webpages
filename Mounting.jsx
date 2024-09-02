import React from "react";

class Mounting extends React.Component{

    constructor(props){
        super(props)
        this.state={
            color:"black"
        }
    }
     static getDerivedStateFromProps(props,state){
         return{
             color:props.FavColor
         }
     }
    render(){
        return(
            <div style={{color:"blue"}}>My favourite color is  {this.state.color}</div>
        )
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({color:"green"})
        },5000);
        
    }
}
export default Mounting