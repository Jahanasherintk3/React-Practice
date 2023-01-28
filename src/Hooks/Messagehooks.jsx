import React,{useState}from 'react'
const Messagehooks = () => {
    let message="Hello"
    let [variable,setVariable]=useState("HELLO");  //setvariable used for update variable
   // in case of state we can pass only object bt in useState we can pass anything(array,number,string etc...)

   let gmHandler=()=>{
    setVariable("GM")
  }
  let gnHandler=()=>{
    setVariable("GN")
  }

  return (
    <div>
         {/*<h1>Variable:{JSON.stringify(variable)}</h1>*/}
        <h1>Wish Message:{variable}</h1>
        <button onClick={()=>{
           setVariable("GM")
        }}>GM</button>
        <button onClick={()=>{
          setVariable("GN")
        }}>GN</button>
    </div>
  )

  }
export default Messagehooks;