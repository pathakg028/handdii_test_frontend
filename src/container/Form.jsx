import React, { Component } from "react";

/* Import Components */
import Input from "../components/Input";
import Button from "../components/Button";

// const initialState = {
//   newUser: {
//     name: ""
//   },
//   latitude: "",
//   longitude: "",
//   submitted: false
// };

//type State = Readonly<typeof initialState>;

class FormContainer extends Component {
  // readonly state: State = initialState;
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: ""
      },
      latitude: "",
      longitude: "",
      submitted: false
    };
  }

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

  handleFormSubmit = async event => {
    event.preventDefault();
    let userData = this.state.newUser.name;
    userData = userData.replace(/' '/, /'+'/);

    let response = await fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        userData +
        "&key=AIzaSyDDFxE089nlX0rL-OFgJq3o-xb0WKxZjwk"
    );
    const data = await response.json();
    const location = data.results[0].geometry.location;
    this.setState({
      latitude: location.lat,
      longitude: location.lng,
      submitted: true
    });
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
    let result = "";
    if (this.state.submitted) {
      result = (
        <div>
          <div>Latitude: {this.state.latitude}</div>
          <div>Longitude: {this.state.longitude}</div>
        </div>
      );
    }
    return (
      <form className="container-fluid">
        <Input
          inputtype={"text"}
          title={"Address"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Enter your name"}
          onChange={this.handleInput}
        />{" "}
        {/* About you */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
          onClick={this.handleFormSubmit}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
        {result}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
