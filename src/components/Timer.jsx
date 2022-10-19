import React from 'react'
import { useEffect, useState } from 'react';

function Timer() {
    const [count, setCount] = useState(0)
    const [running,setRunning] = useState(false)
    const start=()=>{
      setRunning(true)
    }
    const stop=()=>{
      setRunning(false)
    }
    const reset=()=>{
      setRunning(false)
      setCount(0)
    }
    useEffect(() => {
      let interval
      if(running){
        interval=setInterval(() => {
          setCount((count)=>
             count+1
          )
        },1000);
      }
    
      return () => {
        clearInterval(interval)
      }
    }, [running])
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='mt-8'><h1>{count}</h1></div>
        <div className='flex mt-6 w-40 justify-between'>
           <button onClick={stop} className='bg-red-700 rounded-lg  p-2'>stop</button>
            <button className='bg-green-500 rounded-lg  p-2' onClick={start}>start</button>
            <button className='bg-slate-500 rounded-lg  p-2' onClick={reset}>reset</button>
        </div>
    </div>

  )
}

export default Timer