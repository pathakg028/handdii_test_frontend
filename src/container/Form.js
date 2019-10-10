import React, { Component } from "react";

/* Import Components */
import Input from "../components/Input";
import Button from "../components/Button";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: ""
      }
    };
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName = e => {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  };

  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  };

  handleFormSubmit = e => {
    e.preventDefault();
    let userData = this.state.newUser;

    console.log(userData);
  };

  handleClearForm = e => {
    e.preventDefault();
    this.setState({
      newUser: {
        name: ""
      }
    });
  };

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputtype={"text"}
          title={"Address"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Enter your name"}
          handleChange={this.handleInput}
        />{" "}
        {/* About you */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
