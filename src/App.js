import React, { Component } from 'react';
//import { Route } from 'react-router-dom'
import ListContacts from './ListContacts'
//import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'


class App extends Component {
    state ={
        //piece of state to render UI it should live inside of a component
        //react should take care of the state of the data
        contacts:[
            {
              "id": "ryan",
              "name": "Ryan Florence",
              "email": "ryan@reacttraining.com",
              "avatarURL": "http://localhost:5001/ryan.jpg"
            },
            {
              "id": "michael",
              "name": "Michael Jackson",
              "email": "michael@reacttraining.com",
              "avatarURL": "http://localhost:5001/michael.jpg"
            },
            {
              "id": "tyler",
              "name": "Tyler McGinnis",
              "email": "tyler@reacttraining.com",
              "avatarURL": "http://localhost:5001/tyler.jpg"
            }
        ]
    }

 removeContact = (contact) =>{
     this.setState((state) =>({
         contacts:state.contacts.filter( (c) =>c.id !== contact.id)
     }))
 }
  render() {
    return (
        //instead of props it will be a state
      <ListContacts onDeleteContact={this.removeContact} contacts ={this.state.contacts}/>
    )
  }
}

export default App;
