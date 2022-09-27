import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

function ContactList(props) {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  return (
    <div className="main">
      <h2>
        Contact List{" "}
        <Link to="/add">
          <button className="ui button blue right floated">Add Contact</button>
        </Link>
      </h2>

      <div className="ui celled list container">
        {props.contacts.map((contact) => (
          <ContactCard list={contact} key={contact.id} />
        ))}
      </div>
    </div>
  );
}

export default ContactList;
