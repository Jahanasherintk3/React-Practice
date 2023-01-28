import React, { Component } from 'react'

class ContactList extends Component {
  render() {
    return (
      <div>
      {/*  <h1>Contact List App</h1> */}
       {/* <pre>{JSON.stringify(this.props)}</pre>  */}
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <div className="table table-hover">
                        <thead className='bg-primary'>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.contacts.map((contact)=>{
                                    return <tr key={contact.login.uuid}>
                                        <td>{contact.login.uuid.substring(32,38)}</td>
                                        <td>{contact.name.first}</td>
                                        <td>{contact.Email}</td>
                                        <td>{contact.loc}</td>
                                    </tr>
                                  })
                            }
                        </tbody>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
  }
}

export default ContactList