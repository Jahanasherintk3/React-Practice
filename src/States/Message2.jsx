import React from "react";
class Message2 extends React.Component{
    Message="Hai Ram"   //property
    changeButton=()=>{                     // we are giving here one method which update the state
        this.Message="Hello Ram"          //hai will chnage into hello
        this.forceUpdate()    //showing the change
    }
    render(){
        return(
            <div>
                <h3>Messages2</h3>
                <h3>Messages:{this.Message}</h3>     
                <button onClick={this.changeButton}>Click</button>
            </div>
        )
    }
}
export default Message2;