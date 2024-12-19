import React, { useEffect, useState } from 'react'

const useDebounce = (serachBy , delay) => {
  const [debounceSerachBy , setDbounceSerchBy] =useState("")


  useEffect(()=>{

    const saveSerchByFor = setTimeout(()=>{
           setDbounceSerchBy(serachBy)
    },[delay])

    return ()=>{
        clearTimeout(saveSerchByFor)
    }

  },[serachBy , delay])


  return debounceSerachBy
}

export default useDebounce