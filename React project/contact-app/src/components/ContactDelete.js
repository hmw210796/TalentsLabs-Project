import { Link } from "react-router-dom";
import ContactDetails from "./ContactDetails";

function ContactDelete(props) {
  const { id, name, email } = props.location.state.contact;

  const getContactId = () => {
    props.deleteContactHandler(id);
    props.history.push("/");
  };

  return (
    <div className="ui container center aligned">
      <div>
        <h3>Are you sure you want to delete the contact?</h3>
      </div>

      <div>
        <div>
          <button className="ui button blue" onClick={getContactId}>
            Yes
          </button>
          <Link to={"/"}>
            <button className="ui button red">No</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactDelete;
