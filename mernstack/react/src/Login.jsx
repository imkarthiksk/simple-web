import { useState } from "react"

const Login =()=>{
    const[count,setCount]=useState(0);
    function add(){
        setCount(count +1)
    }
    function sub(){
        if(count==0){
            setCount(count)
        }
        else{
            setCount(count -1)
        }
    }
    return(
        <> 
        <button onClick={add}>+</button>
        <p>{count}</p>
        <button onClick={sub}>-</button>
        
        </>)
}
export default Login