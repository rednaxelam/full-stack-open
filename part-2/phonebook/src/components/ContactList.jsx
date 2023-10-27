const ContactList = ({persons}) => {
  return (
    <>
      {persons.map(person => <p key={person.id}>{person.name}</p>)}
    </>
  )
}

export default ContactList