import React, { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import FilterForm from 'components/FilterForm/FilterForm';
import ContactList from 'components/ContactList/ContactList';
import { Layout, MainTitle, SecondaryTitle, GlobalStyles } from '.';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    console.log('componentDidMount...');
    // const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    // console.log('eсть ли запись в LocalStorage: ' + Boolean(parsedContacts));
    // if (parsedContacts) {
    //   console.log('get data from LocalStorage to state');
    //   this.setState({ contacts: parsedContacts });
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate...');
    // const { prevContacts } = prevState.contacts;
    // const { contacts } = this.state;
    // if (this.state !== prevState.contacts) {
    //   // console.table(prevState.contacts);
    //   // console.table(this.state.contacts);

    //   localStorage.setItem('contacts', JSON.stringify(contacts));
    //   console.log('from state to LocalStorage');
    // }
  }

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit(values, { resetForm }) {
    const { contacts } = this.state;
    const { name, number } = values;
    const isNameAlreadyExist = Boolean(
      contacts.find(contact => contact.name === name)
    );

    resetForm();

    if (isNameAlreadyExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { id: nanoid(), name, number }],
      };
    });
  }

  filterContacts = () => {
    const { filter } = this.state;
    const { contacts } = this.state;
    return contacts.filter(({ name }) => {
      return name.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
    });
  };

  deleteContact = name => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.name !== name);
    this.setState({ contacts: newContacts });
  };

  render() {
    const renderData = this.filterContacts();
    console.log('render...');

    return (
      <>
        <Layout>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm handleSubmit={this.handleSubmit.bind(this)} />
          <SecondaryTitle>Contacts</SecondaryTitle>
          <FilterForm onChange={this.handleChange} />

          <ContactList renderData={renderData} onDelete={this.deleteContact} />
        </Layout>
        <GlobalStyles />
      </>
    );
  }
}

export default App;
