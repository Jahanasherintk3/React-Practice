import React,{useState} from 'react'

const Message = () => {
    let[msg,setMsg]=useState("Good Morning");
    let gmHandler=()=>{
        setMsg("Coming")
    }
    let gnHandler=()=>{
        setMsg("Going")
    }
  return (
    <div>
        <h1>Message:{msg}</h1>
        <button onClick={gmHandler}>Msg1</button>
        <button onClick={gnHandler}>Msg2</button>
        </div>
  )
}

export default Message;