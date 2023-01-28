import React from "react";
import CompB from "./CompB";
class CompA extends React.Component{
    Message="Good Morning";
    Wish="Good Evening";
    render(){
        return(
            <div>
                <h1>Component A</h1>
                <CompB one={"Hai"} two={"Hello"}/>
            </div>
        )
    }
}
export default CompA;