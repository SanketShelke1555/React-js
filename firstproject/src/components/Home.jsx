import React, { useState } from 'react'



function Home() {

const [data,setData] = useState(["Hello"]) 

function f1(){
    const arr = ["HI","Bye","good"]

    let random = Math.floor(Math.random()*arr.length);

    setData(arr[random]);
}

  return (
    <>
    <div>
        <h1>{data}</h1>
        <button onClick={f1}>Change</button>
    </div>

  
    </>
  )
}

export default Home
