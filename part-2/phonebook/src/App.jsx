import { useState } from 'react'
import ContactList from './components/ContactList'
import HTag from './components/HTag';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 0 }
  ]) 
  const [newName, setNewName] = useState('')
  let [nextID, setNextID] = useState(1);

  const handleNewNameInput = (e) => {
    setNewName(e.target.value);
  }

  const addContact = (e) => {
    e.preventDefault();
    let ID = nextID;
    const contactName = newName;
    setPersons(persons.concat({ name: contactName, id: ID}));
    setNewName('');
    setNextID(ID + 1);
  }

  return (
    <div>
      <HTag textContent={'Phonebook'} level={2}/>
      <form id='form-add-contact' onSubmit={addContact}>
        <label htmlFor="name">name:</label>
        <input type='text' name='name' id='name' value={newName} onInput={handleNewNameInput}/>
        <br />
        <button type="submit" >add</button>
      </form>
      <HTag textContent={'Numbers'} level={2}/>
      <ContactList persons={persons}/>
    </div>
  )
}

export default App