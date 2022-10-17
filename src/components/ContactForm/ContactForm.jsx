import React, { Component } from "react"
import { nanoid } from 'nanoid'
import {Form, FormLabel, FormInput, InputButton} from './ContactForm.styled'

class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  } 
  
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    }
    this.props.onSubmit(contact);
    this.resetForm();
  }

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    })
  }

  render() {
    const { name, number } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <FormLabel> Name
            <FormInput
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Oleksandr Veremchuk"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormLabel>
          <FormLabel>Phone number
            <FormInput
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              placeholder="555-55-55"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormLabel>
          <InputButton type="submit">Add contact</InputButton>
        </Form>
      </>
    )
  }
}

export default AddContactForm;