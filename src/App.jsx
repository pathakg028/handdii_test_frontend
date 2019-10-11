import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import FormContainer from "./container/Form";

const App = () => (
  <div className="App">
    <NavBar />
    <div className="mg-tp">
      <FormContainer />
    </div>
  </div>
);

export default App;
