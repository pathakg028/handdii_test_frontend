import React from "react";
import "./App.css";
import FormContainer from "./container/Form";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:5500/graphql"
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <FormContainer />
      </div>
    </ApolloProvider>
  );
};

export default App;
