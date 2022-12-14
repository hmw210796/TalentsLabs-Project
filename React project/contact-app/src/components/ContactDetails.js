import { Link } from "react-router-dom";
import rick from "../image/rick.jpg";

function ContactDetails(props) {
  const { name, email } = props.location.state.contact;

  return (
    <div className="ui main ">
      <div className="ui card centered">
        <div className="image">
          <img src={rick} alt="rick" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="ui container center aligned">
        <Link to="/">
          <button className="ui button blue center ">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ContactDetails;
