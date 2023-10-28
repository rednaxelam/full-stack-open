import { useState } from 'react'
import ContactList from './components/ContactList'
import HTag from './components/HTag';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-1234567', id: 0 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  let [nextID, setNextID] = useState(1);

  const handleTextualInputDefault = (setter) => {
    return e => setter(e.target.value);
  }

  const handleNewNameInput = handleTextualInputDefault(setNewName);

  const handleNewPhoneInput = handleTextualInputDefault(setNewPhone);

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
    console.log(persons.concat({ name: contactName, phone: contactPhone, id: ID}));
  }

  return (
    <div>
      <HTag textContent={'Phonebook'} level={2}/>
      <form id='form-add-contact' onSubmit={addContact}>
        <label htmlFor="name">name:</label>
        <input type='text' name='name' id='name' value={newName} onInput={handleNewNameInput}/>
        <br />
        <label htmlFor="phone">phone:</label>
        <input type='tel' name='phone' id='phone' value={newPhone} onInput={handleNewPhoneInput}/>
        <br />
        <button type="submit" >add</button>
      </form>
      <HTag textContent={'Numbers'} level={2}/>
      <ContactList persons={persons}/>
    </div>
  )
}

export default App