import { useEffect, useState } from "react"

export let useFetch=(url)=>{
   const [data,setData]=useState([])
    //let data=[]
    useEffect(()=>{
        fetch(url)
        .then((rawdata)=>rawdata.json())
        .then((jsondata)=>setData(jsondata))
    },[])
    return data
}

export let useCounter=(max,min)=>{
   const [counter,setCounter]=useState(0)
    let increment=()=>{
    if(counter<max)
    {
      setCounter(counter+1)
    }
    }
    let decrement=()=>{
        setCounter(counter-1)
    }

    return [counter,increment,decrement]

}