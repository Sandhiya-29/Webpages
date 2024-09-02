import React from "react";
class Unmounting extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show:true
        }
        this.removeHeader=this.removeHeader.bind(this)
    }
    removeHeader(){
        this.setState({
            show:false
        })

    }
    render(){
        if(this.state.show){
            var header=<Header/>
        }
        return(
            <div>
                {header}
                <button  class="btn btn-dark"onClick={this.removeHeader}>RemoveHeader</button>
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <h1>Hello am header</h1>
        )
    }
    componentWillUnmount(){
        alert ("Header will remove")
    }
}
export default Unmounting