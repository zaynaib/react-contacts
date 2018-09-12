import React, {Component} from 'react'
function ListContacts(props){
    //instead of getting the props from an instance we get it from the argument of the function
    return(
        <ol className = 'contact-list'>
        {props.contacts.map((contact)=> (
            <li key={contact.id} className='contact-list-item'>
                <div className='contact-avatar' style={{
                    backgroundImage:`url(${contact.avatarURL})`
                }}>

                </div>

                <div className='contact-details'>
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                </div>
                <button className='contact-remove'>
                    Remove
                </button>
            </li>
        ))}

        </ol>
    )

}

export default ListContacts