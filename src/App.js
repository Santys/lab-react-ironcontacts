import {useState} from 'react';
import Contacts from './contacts.json'
import './App.css';

// Get contacts from position 5 to end position
const randomContacts = Contacts.slice(5)

function App() {
  const [contacts, setContacts] = useState(Contacts.slice(0, 5)) // Set state to first 5 contacts
  
  // Add a new random contact from pool to the state contacts
  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * (randomContacts.length - 5)+ 5)
    const randomContact = randomContacts.splice(randomIndex, 1)[0]
    setContacts([...contacts, randomContact])
  }
  
  // Sort contacts by highest popularity
  const sortByPopularity = () => {
    const sortedArray = contacts
      .map((contact) => contact)
      .sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedArray);
  };

  // Sort contacts alphabetically
  const sortByName = () => {
    const sortedArray = contacts
      .map((contact) => contact)
      .sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
    setContacts(sortedArray);
  };

  // Delete selected contact by id
  const deleteContact = (id) => {
    setContacts(
      contacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div>
        <button onClick={() => addRandomContact()}>Add Random Contact</button>
        <button onClick={() => sortByPopularity()}>Sort by popularity</button>
        <button onClick={() => sortByName()}>Sort by name</button>
      </div>
      <table className="table">
        <tbody>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
        {contacts.map(contact => {
          return (
              <tr key={contact.name}>
                <td><img src={contact.pictureUrl} alt={contact.name}/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                {contact.wonOscar ? <td>🏆</td> : <td></td>}
                {contact.wonEmmy ? <td>🏆</td> : <td></td>}
                <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
              </tr>
            )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
