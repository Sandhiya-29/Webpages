import React from "react";
class Updating extends React.Component{
    constructor(props){
        super(props)
        this.state={
            color:"black"
        }
        this.changeColor=this.changeColor.bind(this)
    }
    // static getDerivedStateFromProps(props,state){
    //     return{color:props.FavColor
    //         }
       
    // }
    changeColor(){
        this.setState({
            color:"blue"
        })
    }
    // shouldComponentUpdate(){
    //     return true
    // }
    render(){
        return(
        
            <div>My favourite color is {this.state.color}
            <br/>
            <button onClick={this.changeColor}class="btn btn-warning">change</button>
            <div id="div1"></div>
            <div id="div2" ></div>
            </div>
            
        )
    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
        document.getElementById("div1").innerHTML= prevstate.color
        return null
        
        
    }
    componentDidUpdate(){
        console.log(this.state.color)
        document.getElementById("div2").innerHTML=this.state.color
    }
}
export default Updating