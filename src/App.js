import { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContatctList';
import FilterContact from './components/FilterContact';
import Section from './components/Section';
import Container from './components/Container';
import shortid from 'shortid';
import 'modern-normalize/modern-normalize.css';
class App extends Component {
  state = {
    filter: '',
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  takeCurrentValue = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };
  getFilterContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };
  handleSubmitForm = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (this.state.contacts.find(({ name }) => name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
  };

  onDeleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filtered = this.getFilterContact();

    return (
      <Container className="App">
        <Section title="Phonebook">
          <ContactForm handleSubmitForm={this.handleSubmitForm} />
        </Section>
        <Section title="Contacts">
          <FilterContact value={this.takeCurrentValue} filter={filter} />
          <ContactList onDeleteContact={this.onDeleteContact} list={filtered} />
        </Section>
      </Container>
    );
  }
}

export default App;
