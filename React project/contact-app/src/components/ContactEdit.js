import React from "react";
import { Link } from "react-router-dom";

class ContactEdit extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email } = props.location.state.contact;
    this.state = {
      id,
      name,
      email,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="ui main container">
        <h2>
          Add Contact{" "}
          <Link to={"/"}>
            <button className="ui button blue right floated">
              Back to Contact List
            </button>
          </Link>
        </h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div>
            <button className="ui blue button">Update</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactEdit;
