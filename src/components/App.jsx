import React,{ useState, useEffect } from "react"; 
import { ContactForm } from "./Form/Form";
import { nanoid } from "nanoid";
import { ContactList } from "./Contacts/ContactList";
import { ContactFilter } from "./ContactFilter/ContactFilter";
import { MainContainer } from "./MainContainer.styled";


const getInitialContacts = () =>{
  const savedContacts = localStorage.getItem(`saved-contacts`);// читаємо з LS збережені контакти
  if(savedContacts !== null) {// якщо savedContacts не пустий...     
    return JSON.parse(savedContacts);// парсимо з LS контакти в state
  } 
  return  [];    
}

export const App = () =>{
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState(''); 
  
  useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = evt => {
    setFilter(evt.target.value)
  };

  const addContact = newContact => {
    const {name} = newContact;
    const isExist = contacts.some(contact => contact.name === name);
     
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    setContacts(prevContacts => [    
      ...prevContacts, {id: nanoid(),...newContact }      
    ]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId),
    );  
  };

  const filteredContacts = () => {    
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
        
  return (
    <MainContainer>
      <h1>Phonebook</h1>
      <ContactForm  onAdd = {addContact} />
      <h2>Contacts</h2>
      <ContactFilter value={filter} onChangeFilter={changeFilter}/>
      <ContactList contacts={filteredContacts()} onDelete={deleteContact}/>      
    </MainContainer>
  )

}


