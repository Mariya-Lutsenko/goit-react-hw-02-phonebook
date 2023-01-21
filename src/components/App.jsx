import React, { Component } from 'react';
// import css from './App.module.css';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',

  };

  addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    let isAdded = false;
    this.state.contacts.forEach(contact => {
      if (contact.name.toLowerCase() === normalizedName) {
        alert(`${name} is already in contacts`);
        isAdded = true;
      }
    });

    if (isAdded) {
      return;
    }

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(prevstate => ({
      contacts: [...prevstate.contacts, contact],
    }));
  };

 


  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <div>
          <label>
            Filter
            <input
              type="name"
              name="filter"
              value={filter}
              onChange={this.changeFilter}
            />
          </label>
        </div>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <p>
                {name} {number}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
