import React, { useState } from 'react'

export default function Calculator() {
    let sty={
        backgroundColor: 'lightgray',
        padding: '10px',
        margin: '150px',
        marginLeft: '480px',
        marginRight: '480px',
        width: '300px',
        height: '350px',
        borderRadius: '20px',
      }
      let bton={
        width: '50px',
        height: '50px',
        margin: '5px',
        borderRadius: '10px',
        fontSize: '25px',
        backgroundColor: 'darkgrey',
      }
      let inp={
        width: '230px',
        height: '40px',
        margin: '20px',
        borderRadius: '2px',
        fontSize: '25px',
        border: '1px',
        borderStyle: 'solid',
        color: 'black',
      }
    const [input, setInput]=useState('')
  return (
    <div style={sty}>
      <input style={inp} type='text' value={input}/><br/>
      <button style={bton} onClick={()=>{setInput(input+ '')}}>C</button>       
      <button style={bton} onClick={()=>{setInput(input+ '1')}}>1</button>
      <button style={bton} onClick={()=>{setInput(input+ '2')}}>2</button> 
      <button style={bton} onClick={()=>{setInput(input+ '3')}}>3</button> <br/>
      <button style={bton} onClick={()=>{setInput(input+ '4')}}>4</button> 
      <button style={bton} onClick={()=>{setInput(input+ '5')}}>5</button>
      <button style={bton} onClick={()=>{setInput(input+ '6')}}>6</button> 
      <button style={bton} onClick={()=>{setInput(input+ '7')}}>7</button> <br/>
      <button style={bton} onClick={()=>{setInput(input+ '8')}}>8</button> 
      <button style={bton} onClick={()=>{setInput(input+ '9')}}>9</button>
      <button style={bton} onClick={()=>{setInput(input+ '0')}}>0</button> 
      <button style={bton} onClick={()=>{setInput(input+ '+')}}>+</button> <br/>
      <button style={bton} onClick={()=>{setInput(input+ '-')}}>-</button> 
      <button style={bton} onClick={()=>{setInput(input+ '*')}}>*</button>
      <button style={bton} onClick={()=>{setInput(input+ '/')}}>/</button> 
      <button style={bton} onClick={()=>{setInput(eval(input))}}>=</button>
      <button style={bton} onClick={()=>{setInput(input.slice(0,input.length-1))}}>X</button>
    </div>
  )
}
