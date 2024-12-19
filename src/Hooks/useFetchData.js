import React, { useEffect, useState } from 'react'

const useFetchData = ( invokeIncomingFunc) => {
    const [data , setData ] = useState([]);

     const fetchData  = async ()=>{
         const apiResponse  = await invokeIncomingFunc();
         console.log("--api res --", )
     }

     useEffect(()=>{
        fetchData()
     },[])
}

export default useFetchData