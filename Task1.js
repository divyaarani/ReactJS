import React, { useState } from 'react'

export default function Task1() {
    const [count, setCount]= useState(0);
    const handleIncrement=()=>{        
      setCount(count+1);
    };
    const handleDecrement=()=>{
      if (count>0){
        setCount(count-1);
      }
    };
  return (
    <div className='count'>
      <h1>COUNT: {count}</h1>
      <button className='Incr' onClick={handleIncrement}>Increment</button> 
      <button className='Decr' onClick={handleDecrement}>Decrement</button>
    </div>
  );
};
