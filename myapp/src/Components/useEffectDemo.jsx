import React, { useEffect, useState } from 'react';

function UseEffectDemo(props) {
    const [msg,setMsg]=useState("Hello")
    const [counter,setCounter]=useState(0)



    //useEffect(callback,dep) callback=>code you want to execute after rendering
   
    useEffect(()=>{
        console.log("UE1:After each re-rendering...")
        //console.log("getting data from server..")
  
})

    useEffect(()=>{
       
        console.log("UE2:After initial rendering")
        setMsg(msg+"!")
    },[])
    useEffect(()=>{
        console.log("UE3:After msg  change")
        
},[msg])
    console.log("rendered...")
    return (
        <div>
            <p>{msg}</p>
            <button onClick={()=>{setMsg(msg+"!")}}>change msg</button>
            <p>{counter}-<button onClick={()=>{setCounter(counter+1)}}>+</button></p>
        </div>
    );
    //console.log("it will not execute")
}

export default UseEffectDemo;