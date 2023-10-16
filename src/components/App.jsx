import { Component } from "react"; 
import { ContactForm } from "./Form/Form";
import { nanoid } from "nanoid";
import { ContactList } from "./Contacts/ContactList";
import { ContactFilter } from "./ContactFilter/ContactFilter";
import { MainContainer } from "./MainContainer.styled";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],    
    filter: '',    
  }

 componentDidUpdate(prevState) {   
    if (prevState.contacts !== this.state.contacts){// якщо в попереднтому state контакти співпадають з this.state, то записуємо this.state.contacts в LS
      localStorage.setItem("saved-contacts", JSON.stringify(this.state.contacts));
    }    
  };

  componentDidMount() { 
    const savedContacts = localStorage.getItem(`saved-contacts`);// читаємо з LS збережені контакти
    if(savedContacts !== null) {// якщо savedContacts не пустий...     
      this.setState({
        contacts : JSON.parse(savedContacts)// парсимо з LS контакти в state
      })
    }   
  }; 

  getContactFiltered = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  addContact = newContact => {
    const {name} = newContact;

    const isExist = this.state.contacts.some(contact => contact.name === name);
     
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, {id: nanoid(),...newContact }]
      
    }))
  };

  changeFilter = evt => {
    this.setState({ filter: evt.target.value })
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));  
  };

  render() {
    const {filter} = this.state;
    const filteredContacts = this.getContactFiltered();
     return (
    <MainContainer>
      <h1>Phonebook</h1>
      <ContactForm  onAdd = {this.addContact} />
      <h2>Contacts</h2>
      <ContactFilter 
      value={filter} 
      onChangeFilter={this.changeFilter}/>
      <ContactList
      contacts={filteredContacts}       
      onDelete={this.deleteContact}/>      
    </MainContainer>
  )}
}

