import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import api from "./api/contacts";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import ContactDetails from "./components/ContactDetails";
import ContactDelete from "./components/ContactDelete";
import ContactEdit from "./components/ContactEdit";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);
  //JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ??

  //Retrieve Contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    console.log(contact);

    const request = {
      id: uuid(),
      ...contact,
    };

    const response = await api.post("/contacts", request);

    setContacts([...contacts, response.data]);
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) =>
        contact.id == id ? { ...response.data } : contact
      )
    );
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) {
        setContacts(allContacts);
      }
    };
    getAllContacts();
  }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            )}
          />
          <Route
            path="/add"
            exact
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route path="/contact/:id" exact component={ContactDetails} />
          <Route
            path="/:id/delete"
            exact
            render={(props) => (
              <ContactDelete
                {...props}
                deleteContactHandler={removeContactHandler}
              />
            )}
          />
          <Route
            path="/:id/edit"
            exact
            render={(props) => (
              <ContactEdit
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
