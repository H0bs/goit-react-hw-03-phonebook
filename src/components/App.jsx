import React, { Component } from "react"
import AddContactForm from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList"
import { Filter } from "./Filter/Filter"
import {Container, Title, ContactsTitle} from './App.styled'

class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }

  componentDidMount() {
    const Contacts = localStorage.getItem('Contacts');
    const parsedContacts = JSON.parse(Contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('Contacts', JSON.stringify(this.state.contacts));
    }
  }
  
  addContact = (newContact) => {
    const { contacts } = this.state;
    if (contacts.some(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts`)
    } else {
      this.setState(prevState => {
        return { contacts: [newContact, ...prevState.contacts] }
      })
    }  
  }

  deleteContact = (id) => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(contact => contact.id !== id) }
    })
  }

  filterContactChange = e => {
    this.setState({ filter: e.target.value })
  }

  filterContact = (contacts, filter) => {
    return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filterContact(contacts, filter);
    return (
      <Container>
        <Title>Phone book</Title>
        <AddContactForm onSubmit={this.addContact}/>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter
          value={filter}
          onChangeFilter={this.filterContactChange}
        />
        <ContactList
          contacts={filteredContacts}
          deleteContact = {this.deleteContact}
        />
      </Container>
    )
  }  
}

export default App;