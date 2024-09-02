import { useEffect, useState } from "react"

function UseState(){
    const [Count,setCount]=useState(0)
    const[color,setColor]=useState("blue")
    const[user,setuser]=useState({
        name:"sandhiya",
        mail:"sandhiya@gmail.com",
        mobile:9342212108
    })
    let updateNumber=()=>{
        setuser(prevState=>{
            return{...prevState,mobile:"9087654321"}
        })
    }

    //  useEffect(()=>{
    //      console.log("useEffect Actioned")
    //    setInterval(()=>{
    //          setCount(Count+1)
    //      }, 3000);

        
        
    //  })

    return(
        <div>
    <div>
        <h1>{Count}</h1>
        <h2>{color}</h2>
        <button onClick={()=>setColor("green")} class="btn btn-primary">welcome</button>
        <br/><br/>
        <button onClick={()=>setCount(Count+1)}class="btn btn-danger">click</button>
    </div><br></br>
    <div>
        <form>
            <input  type="text"placeholder="username" />
            <br/><br/>
            <input type="text"placeholder="password" />
            <br/><br/>
            <button  class="btn btn-dark">Submit</button>
        </form>
    </div>
        <div>
            <h3>{user.name}</h3>
            <h3>am {user.name} and my number is {user.mobile}</h3>
            <button onClick={updateNumber} class="btn btn-success">change</button>
        </div>
    
</div>
    )
}
export default UseState