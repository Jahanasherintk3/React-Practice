import React from 'react'

let Counter = () => {
    let[counter,setCounter]=React.useState(10)
  return (
    <div>
        <h1>Counter</h1>
        <button onClick={()=>{setCounter(counter-1)}}>-</button>{/*instead of giving seperate handler we just tried here*/}
        {counter}
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        </div>
  )
}

export default Counter;
{/*here we counter incr and dcr handler we used setcounter.so we have to increase and decrease the value */ }