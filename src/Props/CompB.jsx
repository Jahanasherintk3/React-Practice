import React from "react";
class CompB extends React.Component{
    render(){
        return(
            <div>
                <h1>Component B</h1>
                <pre>{JSON.stringify(this.props)}</pre>
            </div>
        )
    }
}
export default CompB;