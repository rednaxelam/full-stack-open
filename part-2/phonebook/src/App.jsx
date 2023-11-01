import { useEffect, useState } from 'react';
import ContactList from './components/ContactList';
import HTag from './components/HTag';
import TextualInputDefault from './components/TextualInputDefault';
import personsService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newSearch, setNewSearch] = useState('');

  useEffect(() => {
    personsService
    .getAll()
    .then(contacts => setPersons(contacts))
  }, [])

  const addContact = (e) => {
    e.preventDefault();

    const contactName = newName;
    const contactPhone = newPhone;
    
    if (contactName.trim().length === 0) return;
    if (contactPhone.trim().length === 0) return;

    let contactIndex = persons.findIndex(contact => contactName === contact.name);
    if (contactIndex !== -1) {
      if (persons[contactIndex].number === newPhone) {
        alert(`${contactName} is already in the phonebook`);
        return;
      }
      else {
        const confirmText = `${contactName} is already in the phonebook. Would you like to replace their old number with their new one?`;
        if (window.confirm(confirmText)) {
          personsService
            .amendContactNumber(persons[contactIndex], newPhone)
            .then(updatedContact => {
              const newPersonsArray = persons.map(person => (person.id === updatedContact.id) ? updatedContact : person);
              setPersons(newPersonsArray);
              setNewName('');
              setNewPhone('');
            });
          return;
        }
        setNewName('');
        setNewPhone('');
        return;
      }
    };

    personsService
      .createContact({ name: contactName, number: contactPhone})
      .then(newContact => {
        setPersons(persons.concat(newContact));
        setNewName('');
        setNewPhone('');
    })
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
      <ContactList persons={displayedContacts} setPersons={setPersons}/>
    </div>
  )
}

export default App