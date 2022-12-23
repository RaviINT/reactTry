import React,{useState} from 'react'

function DoubleQus() {
    const [status,setStatus]=useState("R")
    console.log(!!status)
  return (
    <div>
      double
      <button onClick={()=>setStatus("hii")}>Status</button>
      {!!status.length&&<div>hii</div>}
    </div>
  )
}

export default DoubleQus
