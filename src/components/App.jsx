import React, { Component } from 'react';
// import css from './App.module.css';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    const {name, value} = event.currentTarget;
    console.log(event.currentTarget.value);
    this.setState({[name]: value});
  }


  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const contact = {
      id: nanoid(),
      name: this.state.name,
    }
    this.setState(prevstate => ({
      contacts: [...prevstate.contacts, contact]
    }))
    console.log(this.state);
  }


  render() {
    const {contacts} = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit = {this.handleSubmit}>
          <label>
            Name
            <input
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ id, name }) => (
            <li key={id}>
              <p>
                {name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
