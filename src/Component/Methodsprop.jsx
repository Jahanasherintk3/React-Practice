import React from 'react';
class Methodsprop extends React.Component{
    Messages="Good Morning"
    ename="Raj"
    emp={id:101,name:"Raj",sal:40000}
    render(){
    return(
        <div>
            <h1>MESSAGES</h1>
            <hr/>
            <p>Messages:{this.Messages}</p>
            <p>Employee Name:{this.ename}</p>
            <p>Employee Id:{this.emp.id},Sal:{this.emp.sal}</p>
        </div>
    )
}
}
export default Methodsprop;