import { useEffect, useState } from 'react';
import axios from 'axios'
import ContactList from './components/ContactList';
import HTag from './components/HTag';
import TextualInputDefault from './components/TextualInputDefault';

const App = () => {
  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newSearch, setNewSearch] = useState('');
  let [nextID, setNextID] = useState(4);

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data));
  }, [])

  const addContact = (e) => {
    e.preventDefault();

    const contactName = newName;
    
    if (contactName.trim().length === 0) return;
    if (persons.findIndex(contact => contactName === contact.name) !== -1) {
      alert(`${contactName} is already in the phonebook`);
      return;
    };

    const contactPhone = newPhone;
    
    if (contactPhone.trim().length === 0) return;

    let ID = nextID;
    setPersons(persons.concat({ name: contactName, phone: contactPhone, id: ID}));
    setNewName('');
    setNewPhone('');
    setNextID(ID + 1);
  }

  const displayedContacts = persons.filter(person => person.name.toUpperCase().includes(newSearch.toUpperCase()));

  return (
    <div>
      <HTag textContent={'Phonebook'} level={2}/>
      <TextualInputDefault label={'filter shown with'} type={'text'} nameID={'filter'} state={newSearch} setter={setNewSearch}/>
      <HTag textContent={'add a new'} level={2} />
      <form id='form-add-contact' onSubmit={addContact}>
        <TextualInputDefault label={'name'} type={'text'} nameID={'name'} state={newName} setter={setNewName}/>
        <TextualInputDefault label={'phone'} type={'tel'} nameID={'phone'} state={newPhone} setter={setNewPhone}/>
        <button type="submit" >add</button>
      </form>
      <HTag textContent={'Numbers'} level={2}/>
      <ContactList persons={displayedContacts}/>
    </div>
  )
}

export default App