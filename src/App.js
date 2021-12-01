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


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={() => addRandomContact()}>Add Random Contact </button>
      <table className="table">
        <tbody>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        {contacts.map(contact => {
          return (
              <tr key={contact.name}>
                <td><img src={contact.pictureUrl} alt={contact.name}/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                {contact.wonOscar ? <td>🏆</td> : <td></td>}
                {contact.wonEmmy ? <td>🏆</td> : <td></td>}
              </tr>
            )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
