import { useState,useEffect } from "react"

const GetApiData = (url) => {
    const[data,setData] =useState({})
    useEffect(
        ()=>{
            getData()
        },[]
    )

    const getData = async()=>{
      let res = await fetch(url);
      let apidata = await res.json();
      console.log('data...',data)
      setData(apidata)
    }
  return data
}

export default GetApiData