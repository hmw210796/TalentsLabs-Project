import { Link } from "react-router-dom";
import user1 from "../image/user1.jpg";
import ContactDelete from "./ContactDelete";

function ContactCard(props) {
  const { id, name, email } = props.list;

  return (
    <div className="ui item row ">
      <img src={user1} className="ui image avatar left floated" />
      <div className="content">
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.list } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <Link
        to={{
          pathname: `/${id}/delete`,
          state: { contact: props.list },
        }}
      >
        <i
          className="trash alternate outline icon right floated"
          style={{ color: "red", marginTop: "20px" }}
        ></i>
      </Link>
      <Link to={{ pathname: `/${id}/edit`, state: { contact: props.list } }}>
        <i
          className="edit alternate outline icon right floated"
          style={{ color: "blue", marginTop: "20px" }}
        ></i>
      </Link>
    </div>
  );
}

export default ContactCard;
