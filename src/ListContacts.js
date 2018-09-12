import React, {Component} from 'react'

class ListContacts extends Component{
    render(){
        console.log('Props',this.props)

        return(
            <ol className='contact-list'>
            <li>{this.props.contacts.map((contact) =>{this.contact.name})}</li>

            </ol>
        )
    }

}

export default ListContacts