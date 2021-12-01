import {useState} from 'react';
import Contacts from './contacts.json'
import './App.css';


function App() {
  const [contacts, setContacts] = useState(Contacts.slice(0, 5))

  return (
    <div className="App">
      <h1>IronContacts</h1>
        <table class="table">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {contacts.map(contact => {
            return (
                <tr>
                  <td><img src={contact.pictureUrl} alt={contact.name}/></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
              )
          })}
        </table>
    </div>
  );
}

export default App;
