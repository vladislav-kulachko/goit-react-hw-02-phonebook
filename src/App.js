import {Component} from 'react';
import {v4 as uuidv4} from 'uuid';
import s from './App.module.css';
import ContactForm from './components/Form/ContactForm';
import ContactFilter from './components/Filter/ContactFilter';
import ContactList from './components/List/ContactList';
export default class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  onSubmit = ({name, number}) => {
    this.state.contacts.find(contact => contact.number === number)
      ? alert('Этот номер уже есть в списке')
      : this.setState(prevState => ({
          contacts: [
            {id: uuidv4(), name: name, number: number},
            ...prevState.contacts,
          ],
        }));
  };
  handlerFindContact = e => {
    this.setState({filter: e.target.value});
  };
  handlerDelContact = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== e.target.id,
      ),
    }));
  };
  render() {
    return (
      <section className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit}></ContactForm>
        <section className={s.contactsSection}>
          <h2 className={s.titleList}>Contacts list</h2>
          <ContactFilter
            filterValue={this.state.filter}
            handlerFindContact={this.handlerFindContact}
          ></ContactFilter>
          <ContactList
            filter={this.state.filter}
            contacts={this.state.contacts}
            handlerDelContact={this.handlerDelContact}
          ></ContactList>
        </section>
      </section>
    );
  }
}