import React, { useEffect, useState } from 'react'
import './Style.css'
export default function Task7() {
    const[duration,setDuration]=useState(0)
    const[seconds,setSeconds]=useState(0)
    const[isRunning,setIsRunning]=useState(false)
    const[isTimerCompleted,setIsTimerCompleted]=useState(false)
    const handleChange=((e)=>{
      setDuration(e.target.value)
      setSeconds(e.target.value)
    })
    useEffect(()=>{
      let interval
      if(isRunning && seconds>0){
        interval=setInterval(()=>{
          setSeconds(prev=>prev-1)
        }, 1000)
      }
      else if (seconds === 0 && isRunning){
        setIsTimerCompleted(true)
        setIsRunning(false)
      }
      return()=>{
        clearInterval(interval)
      }
    },[isRunning,seconds])
    const progresswidth=(seconds/duration)*100
  return (
    <div className='counter'>
      {isTimerCompleted?(<h1>Well Done!!</h1>):(<div><h3> Count Down Time: {seconds} seconds </h3>
      <div className='container1'>
        <div className='progressbar'style={{width:progresswidth+'%'}}></div>
      </div>
     </div> )}
      <br/><br/>
      <input className='inp' type='number' value={duration} onChange={handleChange} disabled={isRunning}/>
      <br/>
      {isRunning?(<button className='b1' onClick={()=>{setIsRunning(false)}}>STOP</button>)
      :(<button className='b1' onClick={()=>{setIsRunning(true)}}>START</button>)}
      
     <button className='b2' onClick={()=>{setSeconds(duration);setIsTimerCompleted(false)}}>RESET</button>
    </div>
  )
}
