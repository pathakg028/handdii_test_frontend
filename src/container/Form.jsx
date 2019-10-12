import React, { Component } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: {
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
        city: {
          ...prevState.city,
          [name]: value
        }
      }),
      () => console.log(this.state.city)
    );
  };

  handleFormSubmit = async event => {
    event.preventDefault();
    let userData = this.state.city.name;
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
      city: {
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
          type={"text"}
          title={"Enter City"}
          name={"name"}
          value={this.state.city.name}
          placeholder={"Enter your name"}
          onChange={this.handleInput}
        />{" "}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
          onClick={this.handleFormSubmit}
        />{" "}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {result}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
