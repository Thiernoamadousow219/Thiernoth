import React, { useState } from 'react'

function Counter() {
const [value ,setValue] = useState(0);

const add = () => {
  setValue (value + 1);
} 
const reduction = () =>{
  setValue (value - 1);
}
  return (
    <div>
        valeur : {value}
    <br/>
        <button onClick={add} >Increment</button>
        <button onClick={reduction}>Decrement</button>

    </div>
  )
}

export default Counter